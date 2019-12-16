# ex00
curl -c cook.txt 'http://localhost:8080/j04/ex00/index.js'
curl -b cook.txt 'http://localhost:8080/j04/ex00/index.js?login=sb&passwd=beeone&submit=OK'
curl -b cook.txt 'http://localhost:8080/j04/ex00/index.js'
curl 'http://localhost:8080/j04/ex00/index.js'

# ex01
curl -d login=toto1 -d passwd=titi1 -d submit=OK 'http://localhost:8080/j04/ex01/create.js'
curl -d login=toto1 -d passwd=titi1 -d submit=OK 'http://localhost:8080/j04/ex01/create.js'
curl -d login=toto2 -d passwd= -d submit=OK 'http://localhost:8080/j04/ex01/create.js'

# ex02
rm ../server/private/passwd
curl -d login=x -d passwd=21 -d submit=OK 'http://localhost:8080/j04/ex01/create.js'
curl -d login=x -d oldpw=21 -d newpw=42 -d submit=OK 'http://localhost:8080/j04/ex02/modif.js'
cat ../server/private/passwd
curl -d login=x -d oldpw=21 -d newpw=42 -d submit=OK 'http://localhost:8080/j04/ex02/modif.js'
curl -d login=x -d oldpw=42 -d newpw= -d submit=OK 'http://localhost:8080/j04/ex02/modif.js'

# ex03
rm ../server/private/passwd
curl -d login=toto -d passwd=titi -d submit=OK 'http://localhost:8080/j04/ex01/create.js'
curl 'http://localhost:8080/j04/ex03/login.js?login=toto&passwd=titi'

rm ../server/private/passwd
curl -d login=toto -d passwd=titi -d submit=OK 'http://localhost:8080/j04/ex01/create.js'
curl -c cook.txt 'http://localhost:8080/j04/ex03/login.js?login=toto&passwd=titi'
curl -b cook.txt 'http://localhost:8080/j04/ex03/whoami.js'
curl -b cook.txt 'http://localhost:8080/j04/ex03/logout.js'
curl -b cook.txt 'http://localhost:8080/j04/ex03/whoami.js'

# ex04
rm ../server/private/passwd
curl -L -d login=user1 -d passwd=pass1 -d submit=OK 'http://localhost:8080/j04/ex04/create.js'
curl -L -d login=user2 -d passwd=pass2 -d submit=OK 'http://localhost:8080/j04/ex04/create.js'
curl -c user1.txt -d login=user1 -d passwd=pass1 'http://localhost:8080/j04/ex04/login.js'
curl -b user1.txt -d submit=OK -d msg=Bonjours 'http://localhost:8080/j04/ex04/speak.js'
curl -b user1.txt -c user1.txt 'http://localhost:8080/j04/ex04/logout.js'

curl -c user2.txt -d login=user2 -d passwd=pass2 'http://localhost:8080/j04/ex04/login.js'
curl -b user2.txt -d submit=OK -d msg=Hello 'http://localhost:8080/j04/ex04/speak.js'
cat ../server/private/chat
curl -b user2.txt 'http://localhost:8080/j04/ex04/chat.js'
