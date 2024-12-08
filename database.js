import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./database.sqlite");

const initializeDB = async () => {
  //await dbRun("DROP TABLE USERS");
  await dbRun(
    "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, firstName TEXT, lastName TEXT, email TEXT, osztaly TEXT)"
  );

  /*const users = [
    {
      firstName: "Kallányos",
      lastName: "Szilveszter",
      email: "copper.rulez@gypsy.com",
      osztaly: "10.a",
    },
    {
      firstName: "Boldizsár",
      lastName: "Armandó",
      email: "bombi4life@gmail.com",
      osztaly: "9.b",
    },
    {
      firstName: "Lakatos",
      lastName: "Jennifer",
      email: "JeLakat@gmail.com",
      osztaly: "11.c",
    },
    {
      firstName: "Roma",
      lastName: "Márió",
      email: "RoMario@citromail.hu",
      osztaly: "12.a",
    },
  ];

  for (const user of users) {
    await dbRun(
      "INSERT INTO users (firstName, lastName, email, osztaly) VALUES (?, ?, ?, ?)",
      [user.firstName, user.lastName, user.email, user.osztaly]
    );
  }*/
};

function dbQuery(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

function dbRun(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function (err) {
      if (err) reject(err);
      else resolve(this);
    });
  });
}

export { db, dbQuery, dbRun, initializeDB };
