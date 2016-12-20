# smtpcheck

# Install npms
```
$npm install
```

# Replace default SMTP json values
```
$ cd config
$ sed -i.bak s/help@example.com/test@example.com/g smtp.json
$ sed -i.bak s/password/yourpassword/g smtp.json
```
# Start Node Index.js
```
$ node index.js
```
