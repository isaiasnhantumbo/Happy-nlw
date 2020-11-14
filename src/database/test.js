const Database = require("./db");
const saveOrphanage = require("./saveOrphanage.js");

Database.then(async (db) => {
  // INSERIR DADOS NA TABELA
  await saveOrphanage(db, {
    lat: "-25.9107546",
    lng: "32.6859487",
    name: "Lar dos meninos",
    about:
      "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "1328734",
    images: [
      "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",

      "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
    ].toString(),
    instructions:
      "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visitas das 20 ate 7h",
    open_on_weekends: "0",
  });

  // CONSULTAR DADOS NA TABELA
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

  // //   CONSULTAR SOMENTE 1 ORPHANAGE, BY ID> PELO ID
  // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"');
  // console.log(orphanage);
  // // DELETAR DADOS DA TABELA
  // await db.run("DELETE FROM orphanages WHERE id='4'");
  // await db.run("DELETE FROM orphanages WHERE id='4'");

});
