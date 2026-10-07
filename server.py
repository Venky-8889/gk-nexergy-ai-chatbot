#!/usr/bin/env python3
"""
GK Nexergy AI Assistant - Standalone Local Server
Zero dependencies required! Runs with Python 3 standard library.
"""

import http.server
import socketserver
import json
import os
import sys
import webbrowser

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class GkChatbotHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_POST(self):
        # Optional local API endpoint for chat integration
        if self.path == '/api/chat':
            content_length = int(self.headers.get('Content-Length', 0))
            post_data = self.rfile.read(content_length)
            
            try:
                data = json.loads(post_data.decode('utf-8'))
                query = data.get('query', '')
                
                # Load knowledge base if needed
                kb_path = os.path.join(DIRECTORY, 'gk_nexergy_complete_kb.json')
                kb = {}
                if os.path.exists(kb_path):
                    with open(kb_path, 'r', encoding='utf-8') as f:
                        kb = json.load(f)
                
                response_data = {
                    "status": "success",
                    "reply": f"Received query: {query}",
                    "company": kb.get("company", {}).get("name", "GK Nexergy")
                }
                
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps(response_data).encode('utf-8'))
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({"error": str(e)}).encode('utf-8'))
        else:
            self.send_error(404, "Endpoint not found")

    def end_headers(self):
        # Add basic CORS headers
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()


class ReusableTCPServer(socketserver.TCPServer):
    allow_reuse_address = True

def run():
    os.chdir(DIRECTORY)
    port = PORT
    httpd = None

    for p in range(port, port + 10):
        try:
            httpd = ReusableTCPServer(("", p), GkChatbotHandler)
            port = p
            break
        except OSError as e:
            if getattr(e, 'winerror', None) == 10048 or getattr(e, 'errno', None) in (98, 48):
                continue
            raise

    if not httpd:
        print(f"[-] Error: Could not bind to port {PORT} or nearby ports.")
        return

    with httpd:
        url = f"http://localhost:{port}"
        print("=" * 60)
        print(f"[*] GK Nexergy AI Chatbot is running!")
        print(f"[*] Open in your browser: {url}")
        print(f"[*] Directory: {DIRECTORY}")
        print(f"[*] Press Ctrl+C to stop the server.")
        print("=" * 60)
        
        # Open in default browser automatically
        try:
            webbrowser.open(url)
        except Exception:
            pass

        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server. Goodbye!")
            httpd.server_close()


if __name__ == '__main__':
    run()
