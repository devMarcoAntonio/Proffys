const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => { //arrow function
//inserir dados
proffyValue = {
    name: "Marco Antonio",
    avatar:"https://avatars2.githubusercontent.com/u/64448041?s=460&u=d0d1966cb30caf3858da50812430eceeed08b353&v=4",
    whatsapp: "13996062918",
    bio:"Entusiata das linguagens de programação.<br><br>Criativo e detalista, instrutor de dinamica própria, experimentando técnicas inovadoras para facilitar a vida dos usuários",
}

classValue = {
    subject: 1,
    cost:"20",
  //proffy_id virá pelo banco de dados
}

classScheduleValues = [
    //class_id virá pelo banco de dados após cadastrarmos a class
    {
        weekday: 1,
        time_from:720,
        time_to:1220
    },
    {
        weekday: 0,
        time_from:520,
        time_to:1220
    }
    
]

//await createProffy(db, { proffyValue, classValue, classScheduleValues })

//consultar dados inseridos

//todos os proffys
const selectedProffys = await db.all("SELECT * FROM proffys")
//console.log(selectedProffys)

//consultar os dados de um determinado professor
//e trazer junto os dados do professor
const selectClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;    
`)
//console.log(selectClassesAndProffys)

//o horario que a pessoa trabalha , por exemplo, é das 8 às 18hs
//o horario time_from(8h) precisa ser menor ou igual ao horairio solicitado
//o time_to precisa acima
const selectClassesSchedules = await db.all(`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id = "1"
    AND class_schedule.weekday = "0"
    AND class_schedule.time_from <= "1330"
    AND class_schedule.time_to > "1330"
`)
//console.log(selectClassesSchedules)
})