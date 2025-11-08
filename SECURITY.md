# Security Policy

## Supported Versions

We release patches for security vulnerabilities. Which versions are eligible for receiving such patches depends on the CVSS v3.0 Rating:

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability, please send an email to security@rapidplay.dev. All security vulnerabilities will be promptly addressed.

Please include the following information in your report:
- Type of issue (e.g. buffer overflow, SQL injection, cross-site scripting, etc.)
- Full paths of source file(s) related to the manifestation of the issue
- The location of the affected source code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit the issue

## Security Measures

This project implements several security measures:

- API keys are stored securely as environment variables
- Server-side API calls to protect sensitive keys
- Input validation for all user inputs
- HTTPS enforcement in production
- No sensitive data stored in client-side code

## Best Practices for Users

- Keep your API keys secure and never share them
- Use environment variables for sensitive configuration
- Regularly update dependencies
- Monitor API usage and quotas
- Report any suspicious activity
