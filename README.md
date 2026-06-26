

https://github.com/user-attachments/assets/64b9b5e8-b6f1-4d0a-8c86-b5995ad686f7

# Hidden Admin Portal

## Challenge Overview

Hidden Admin Portal is a beginner-friendly Web Security Capture The Flag (CTF) challenge. The challenge demonstrates how sensitive credentials and encoded information can accidentally remain exposed inside client-side web applications.

## Setup Instructions

1. Download the project files
2. Open the folder in Visual Studio Code
3. Run `index.html` using Live Server
4. Open the website in a browser

## Challenge Story / Scenario

A company named SecureCorp developed an internal admin portal for employees. During development, the developers accidentally left old credentials hidden inside the webpage source code.

Participants must inspect the application carefully to gain access to the admin system and retrieve the hidden flag.

## Flag Location / Logic

The admin password is hidden inside an HTML comment in the source code.

After successful login, the application reveals a Base64 encoded flag stored inside the JavaScript file.

Participants must decode the Base64 string to obtain the final flag.

## Expected Solution Path

1. Open the website
2. Inspect the webpage source code
3. Discover hidden credentials
4. Login using the credentials
5. Retrieve the encoded flag
6. Decode the Base64 flag
7. Submit the final flag

## Learning Outcomes

* Source code inspection
* Identifying exposed credentials
* Understanding client-side security flaws
* Base64 decoding
* Basic web security awareness

## Flag Format

GCS{hidden_admin_found}
