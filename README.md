# meteor-kitchen-myapp
Meteor kitchen builds a Meteor app with some collections

Use the meteor-kitchen GUI to add interfaces
download the JSON file on local machine
create a meteor folder in user $HOME place the json file in meteor directory
build the meteor app with this command line (replace 'myapp' by your own file name)
      meteor-kitchen myapp.json ./myapp
go to directory by typing: cd myapp
type meteor open browser at localhost:3000 to start application

default admin: UID: admin@example.com / PWD: admin
default user: UID: simpleuser@example.com / PWD: user

NB: prerequisites: nodejs, meteor, meteor-kithen (see: http://www.meteorkitchen.com/)

to inspect mongodb, use the meteor tools or install mongo-express, a nodejs application accessible at 
localhost:8081 (admin/pass as UID/PWD, by default)

