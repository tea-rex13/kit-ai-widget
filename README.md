# kit-ai-widget

This project is contains a chat widget for my cv website. 
It allows any visitor to ask questions about me.
  
There are two parts to this project:

Client> contins styling, chat button, chat window, and message handling.

Server> function that sends messages to AI model and returns a reply.



## Features (planned)

- Floating chat button  
- Pop-out chat panel  
- Local message display  
- Server link for AI replies  
- Context about Kit’s experience (so the assistant can answer questions about the portfolio)  
- Smooth open and close behaviour  
- Mobile-friendly layout

## Project structure (planned)

/client
index.html
styles.css
widget.js

/server
chat.js
package.json

README.md
TODO.md


## How to use

This widget is designed to be copied into an existing site.  
Once finished, you will be able to drop the client code into any page and point it at the server function.


Phase 0 – Design decisions
1. Assistant purpose

The assistant will act mainly as a portfolio guide:

Answer questions about my skills, experience, and projects.

Help visitors understand what i does, and how to contact or work with me.

Handle simple questions about tools and technologies listed on the portfolio.

If a question is too deep or too long, the assistant should give a short reply and suggest using direct contact instead.

