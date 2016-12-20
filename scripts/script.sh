# script to autopopulate default smtp.json
# escape special characters
# example 
# Char!> with Char\!\>
### Example Start 
##
##
sed -i.bak s/Car\!123123/\<password\>/g smtp.json
##
##
##  END

sed -i.bak s/text@example.com/test@example.com/g smtp.json
sed -i.bak s/password/yourpassword/g smtp.json


## invalid cases 
##
sed -i.bak s/help@examplecom/help@yourcompanycom/g smtp.json
##


