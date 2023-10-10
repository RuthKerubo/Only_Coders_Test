## News Feed

Run docker compose to start mongodb

```sh
$ docker compose exec -it mongodb mongosh -u admin -p test_password --authenticationDatabase admin
```

Add a default user. The password is b-crypt encrypted version of the text `password`. https://bcrypt-generator.com/

```sh
> db.users.insertOne({email: "janedoe@gmail.com", name: "Jane Doe", password: "$2a$12$Eypa5MEI/i96X2oHNSjObejbxC5hPZK1HZlLAm6XEcCsfoJNx2zU6" });
```

Check to see if it has been inserted successfully

```sh
> db.users.find({email: "janedoe@gmail.com"});
```
