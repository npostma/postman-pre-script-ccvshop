# Postman Pre-request Script
Postman Pre-request Script for connecting to the CCV Shop API

## Steps to setup:

1. Install Postman :-)
2. Setup a call to the CCV Shop API
3. Add the JS script into the Pre-request scipts tab
4. Change/Add the xPublic and secret into the pre-script. (Line 2 and 3)
5. Setup the headers so they use the environment variables set by the script to: 

```
x-date:{{x-date}}
x-hash:{{x-hash}}
x-public:{{x-public}}
```



