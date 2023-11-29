const express = require('express')
const app = express()

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(express.json())
app.use(requestLogger)
app.use(express.static('dist'))

let saaliit = [
    {
        id: 1,
        laji: "Taimen",
        suurin_suojeluarvosumma: 3260,
        rekisteroidyt_saaliit: [
          {
            id: 1,
            paikkakunta: "Lappeenranta",
            maara: 1
          },
          {
            id: 2,
            paikkakunta: "Espoo.",
            maara: 1
          },
          {
            id: 3,
            paikkakunta: "Helsinki",
            maara: 1
          },
          {
            id: 4,
            paikkakunta: "Inari",
            maara: 13
          },
          {
            id: 5,
            paikkakunta: "Lemi",
            maara: 17
          },
          {
            id: 6,
            paikkakunta: "Merikarvia",
            maara: 14580
          }
        ]
      },
      {
        id: 2,
        laji: "Lohi",
        suurin_suojeluarvosumma: 7510,
        rekisteroidyt_saaliit: [
          {
            id: 7,
            paikkakunta: "Kuopio",
            maara: 1
          },
          {
            id: 8,
            paikkakunta: "Lapua",
            maara: 1100
          },
          {
            id: 9,
            paikkakunta: "Oulu",
            maara: 45060
          },
          {
            id: 10,
            paikkakunta: "Pori",
            maara: 14
          },
          {
            id: 11,
            paikkakunta: "Rauma",
            maara: 16
          },
          {
            id: 12,
            paikkakunta: "Lemi",
            maara: 1042
          }
        ]
      },
      {
        id: 3,
        laji: "Nieriä",
        suurin_suojeluarvosumma: 5100,
        rekisteroidyt_saaliit: [
          {
            id: 13,
            paikkakunta: "Inari",
            maara: 1
          },
          {
            id: 14,
            paikkakunta: "Lapua",
            maara: 850
          },
          {
            id: 15,
            paikkakunta: "Haapajärvi",
            maara: 8
          },
          {
            id: 16,
            paikkakunta: "Nivala",
            maara: 24
          },
          {
            id: 17,
            paikkakunta: "Oulu",
            maara: 85
          },
          {
            id: 18,
            paikkakunta: "Turku",
            maara: 816
          }
        ]
      },
      {
        id: 4,
        laji: "Harjus",
        suurin_suojeluarvosumma: 1360,
        rekisteroidyt_saaliit: [
          {
            id: 19,
            paikkakunta: "Utsjoki",
            maara: 51
          },
          {
            id: 20,
            paikkakunta: "Inari",
            maara: 54
          },
          {
            id: 21,
            paikkakunta: "Ii",
            maara: 7520
          },
          {
            id: 22,
            paikkakunta: "Lieksa",
            maara: 1
          },
          {
            id: 23,
            paikkakunta: "Taivalkoski",
            maara: 1
          },
          {
            id: 24,
            paikkakunta: "Kuusamo",
            maara: 680
          }
        ]
      },
      {
        id: 5,
        laji: "Nahkiainen",
        suurin_suojeluarvosumma: 100,
        rekisteroidyt_saaliit: [
          {
            id: 25,
            paikkakunta: "Rauma",
            maara: 150
          },
          {
            id: 26,
            paikkakunta: "Pori",
            maara: 35
          },
          {
            id: 27,
            paikkakunta: "Laukaa",
            maara: 1
          },
          {
            id: 28,
            paikkakunta: "Ähtäri",
            maara: 1
          },
          {
            id: 29,
            paikkakunta: "Jyväskylä",
            maara: 4
          },
          {
            id: 30,
            paikkakunta: "Hämeenlinna",
            maara: 2
          }
        ]
      },
      {
        id: 6,
        laji: "Siika",
        suurin_suojeluarvosumma: 460,
        rekisteroidyt_saaliit: [
          {
            id: 31,
            paikkakunta: "Oulu",
            maara: 1
          },
          {
            id: 32,
            paikkakunta: "Helsinki",
            maara: 1
          },
          {
            id: 33,
            paikkakunta: "Espoo",
            maara: 41
          },
          {
            id: 34,
            paikkakunta: "Tammisaari",
            maara: 30
          },
          {
            id: 35,
            paikkakunta: "Hanko",
            maara: 1
          },
          {
            id: 36,
            paikkakunta: "Hamina",
            maara: 15
          }
        ]
      },
      {
        id: 7,
        laji: "Ankerias",
        suurin_suojeluarvosumma: 3510,
        rekisteroidyt_saaliit: [
          {
            id: 37,
            paikkakunta: "Oulu.",
            maara: 15
          },
          {
            id: 38,
            paikkakunta: "Lapua",
            maara: 1
          },
          {
            id: 39,
            paikkakunta: "Ilmajoki",
            maara: 2949
          },
          {
            id: 40,
            paikkakunta: "Kauhajoki",
            maara: 1
          },
          {
            id: 41,
            paikkakunta: "Lemi",
            maara: 20
          },
          {
            id: 42,
            paikkakunta: "Kuusamo",
            maara: 351
          }
        ]
      },
      {
        id: 8,
        laji: "Jokirapu",
        suurin_suojeluarvosumma: 50,
        rekisteroidyt_saaliit: [
          {
            id: 43,
            paikkakunta: "Kauhajoki",
            maara: 18
          },
          {
            id: 44,
            paikkakunta: "Kauhava",
            maara: 104
          },
          {
            id: 45,
            paikkakunta: "Merikarvia",
            maara: 4
          },
          {
            id: 46,
            paikkakunta: "Kihniö",
            maara: 1
          },
          {
            id: 47,
            paikkakunta: "Karstula",
            maara: 2
          },
          {
            id: 48,
            paikkakunta: "Lapua",
            maara: 2
          }
        ]
      }
    ]

    let rajoitukset = [
        {
            id: 1,
            laji: "Rasvaevällinen taimen",
            minpyyntimitta: "Leveyspiirin 67º00´N pohjoispuolisissa vesissä vähintään 50 cm, Leveyspiireillä 64º00´N–67º00´N vähintään 60 cm. Purossa tai lammessa, johon ei ole vaellusyhteyttä merestä tai järvestä, enintään 45 cm.",
            rauhoitusaika: "Vuodesta 2019 alkaen kokonaan rauhoitettu kaikilla merialueilla. Sisävesissä leveyspiirin 64º00´N eteläpuolella kokonaan rauhoitettu. Ei koske taimenta, joka on pyydetty purosta tai lammesta, johon ei ole vaellusyhteyttä merestä tai järvestä. Joessa ja purossa 1.9.–30.11."
          },
          {
            id: 2,
            laji: "Rasvaeväleikattu taimen",
            minpyyntimitta: "Vähintään 50 cm.",
            rauhoitusaika: "Joessa ja purossa 1.9.–30.11."
          },
          {
            id: 3,
            laji: "Lohi",
            minpyyntimitta: "Vähintään 60 cm. Leveyspiirin 63º30´N pohjoispuolella Perämeressä vähintään 50 cm.",
            rauhoitusaika: "Joessa ja purossa 1.9.–30.11."
          },
          {
            id: 4,
            laji: "Rasvaevällinen järvilohi",
            minpyyntimitta: "Vähintään 60 cm.",
            rauhoitusaika: "Vuoksen ja Hiitolanjoen vesistöt kokonaan rauhoitettu. Joessa ja purossa 1.8.–30.11."
          },
          {
            id: 5,
            laji: "Rasvaeväleikattu järvilohi",
            minpyyntimitta: "Vähintään 60 cm.",
            rauhoitusaika: "Vuoksen ja Hiitolanjoen asetuksen karttaliitteen mukaisissa vesissä 1.6–31.8. Joessa ja purossa 1.8.–30.11."
          },
          {
            id: 6,
            laji: "Nieriä",
            minpyyntimitta: "Vuoksen vesistössä vähintään 60 cm. Inarijärvessä vähintään 45 cm.",
            rauhoitusaika: "Kokonaan rauhoitettu Kuolimossa ja Saimaassa Puumalansalmen ja Vuoksenniskan välisellä alueella. Muualla Vuoksen vesistössä 1.9.–30.11."
          },
          {
            id: 7,
            laji: "Harjus",
            minpyyntimitta: "Leveyspiirin 67 º00´N eteläpuolella vähintään 35 cm ja pohjoispuolella vähintään 30 cm.",
            rauhoitusaika: "Meressä kokonaan rauhoitettu. Sisävesissä leveyspiirin 67 º00`N eteläpuolella 1.4.–31.5."
          },
          {
            id: 8,
            laji: "Siika",
            minpyyntimitta: "Ei rajoitettuja pyyntimittoja",
            rauhoitusaika: "Mereen laskevassa joessa ja purossa 1.9.–30.11."
          },
          {
            id: 9,
            laji: "Nahkiainen",
            minpyyntimitta: "Ei rajoitettuja pyyntimittoja",
            rauhoitusaika: "1.4.–15.8."
          },
          {
            id: 10,
            laji: "Kuha",
            minpyyntimitta: "Vähintään 42 cm.",
            rauhoitusaika: "Ei ole"
          },
          {
            id: 11,
            laji: "Ankerias",
            minpyyntimitta: "Ei rajoitettuja pyyntimittoja.",
            rauhoitusaika: "1.8.–30.6."
          }
    ]

    let sakotetut = [
        {
            id: 1,
            nimi: "Pera",
            ika: 45,
            paikkakunta: "Sipoo"
          },
          {
            id: 2,
            nimi: "Teppo",
            ika: 23,
            paikkakunta: "Lempäälä"
          },
          {
            id: 3,
            nimi: "Pera",
            ika: 44,
            paikkakunta: "Sipoo"
          },
          {
            id: 4,
            nimi: "Pera",
            ika: 45,
            paikkakunta: "Sipoo"
          },
          {
            id: 5,
            nimi: "Pera",
            ika: 43,
            paikkakunta: "Sipoo"
          }
    ]


const cors = require('cors')
app.use(cors())

//Generoidaan ID:t kaikille tarvittaville post/delete/patch-requesteille
//Tuodaan oikea taulukko parametrina.
const generateId = (arr) => {
    const maxId = arr.length > 0
    ? Math.max(...arr.map(n => n.id))
    : 0
    return maxId + 1
}  

//Infosivu, jolla näytetään rekisteriin tallennettujen
//lajien määrä + niiden saaliit
//sakotetut henkilöt
//kalastusrajoitukset
//nykyinen aikaleima
app.get('/info', (req, res) => {
  let lajimaara = saaliit.length
  const sakotettumaara = sakotetut.length
  const rajoitusmaara = rajoitukset.length
  res.send('<h2>Kalastusrekisterin info</h2>' +
  '<ul>Tälle sivulle on tallennettu kalojen saalisrekisteri '+ JSON.stringify(lajimaara) + ':n eri kalalajin osalta.</ul>' +
  '<ul>Sen lisäksi sivulle on tallennettu tietoa ' + JSON.stringify(rajoitusmaara) + ' eri lajia koskevista kalastusrajoituksista ja -kielloista. </ul>' +
  '<ul>Näitä kieltoja rikkoneita on tallennettu yhteensä ' + JSON.stringify(sakotettumaara) + ' henkilöä sivun sakkorekisteriin.</ul>' +
  '<p> Tänään on ' + Date())
  
  
})

//########
//SAALIIT#
//########

//Hakee kaikki lajit ja niiden saaliit
app.get('/api/saaliit', (req, res) => {
    res.json(saaliit)
  })

//Hakee id:n perusteella lajin saaliit
app.get('/api/saaliit/:id', (req, res) => {
    const id = Number(req.params.id)
    const saalis = saaliit.find(saalis => saalis.id === id)
    if(saalis){
        res.json(saalis)
    } else {
        res.status(404).end()
    }
})

//Luo uuden lajin saaliskirjanpitoa varten
app.post('/api/saaliit', (req, res) => {
    const body = req.body
    //tarkastetaan, että avaimet ja sisältö löytyvät bodysta
    if (!body.laji || !body.suurin_suojeluarvosumma || !body.rekisteroidyt_saaliit) {
    return res.status(400).json({ 
      error: 'Sisältöä puuttuu!' 
    })
  }

  //Tarkastetaan, ettei lajia ole jo kirjattuna tauluun
  for(let i=0; i<saaliit.length; i++){
    if(saaliit[i].laji.toLowerCase() === body.laji.toLowerCase()){
      return res.status(400).json({
        error: 'Laji on jo kirjattu'
    })}
  }
    
      const saalis = {
        id: generateId(saaliit),
        laji: body.laji,
        suurin_suojeluarvosumma: body.suurin_suojeluarvosumma,
        rekisteroidyt_saaliit: body.rekisteroidyt_saaliit,
      }

      console.log(saalis.id)
      saaliit = saaliit.concat(saalis)
      res.json(saalis)
})

//Poistaa id:n perusteella lajin ja sen saaliit
app.delete('/api/saaliit/:id', (req, res) => {
    const id = Number(req.params.id)
    saaliit = saaliit.filter(saalis => saalis.id !== id)
  
    res.status(204).end()
  })

//############
//RAJOITUKSET#
//############

//Hakee kaikki rajoitukset
app.get('/api/rajoitukset', (req, res) => {
    res.json(rajoitukset)
  })

//Hakee id:n perusteella rajoituksen
app.get('/api/rajoitukset/:id', (req, res) => {
    const id = Number(req.params.id)
    const rajoitus = rajoitukset.find(rajoitus => rajoitus.id === id)
    if(rajoitus){
        res.json(rajoitus)
    } else {
        res.status(404).end()
    }

})


//Luo uuden rajoituksen
app.post('/api/rajoitukset', (req, res) => {
    const body = req.body
    //tarkastetaan, että avaimet löytyvät bodysta
    if (!body.laji || !body.minpyyntimitta || !body.rauhoitusaika) {
        return res.status(400).json({ 
            error: 'Sisältöä puuttuu!' 
        })
    }

    //Tarkastetaan, ettei lajia ole jo kirjattuna tauluun
  for(let i=0; i<saaliit.length; i++){
    if(rajoitukset[i].laji.toLowerCase() === body.laji.toLowerCase()){
      return res.status(400).json({
        error: 'Laji on jo kirjattu'
    })}
  }

      const rajoitus = {
        id: generateId(rajoitukset),
        laji: body.laji,
        minpyyntimitta: body.minpyyntimitta,
        rauhoitusaika: body.rauhoitusaika,
      }

      console.log(rajoitus.id)
      rajoitukset = rajoitukset.concat(rajoitus)
      res.json(rajoitus)
})

//Poistaa id:n perusteella rajoituksen
app.delete('/api/rajoitukset/:id', (req, res) => {
    const id = Number(req.params.id)
    rajoitukset = rajoitukset.filter(rajoitus => rajoitus.id !== id)
  
    res.status(204).end()
  })

//##########
//SAKOTETUT#
//##########

//Hakee kaikki sakotetut
app.get('/api/sakotetut', (req, res) => {
  res.json(sakotetut)
})

//Hakee id:n perusteella sakotetun
app.get('/api/sakotetut/:id', (req, res) => {
    const id = Number(req.params.id)
    const sakotettu = sakotetut.find(sakotettu => sakotettu.id === id)
    if(sakotettu){
        res.json(sakotettu)
    } else {
        res.status(404).end()
    }
})

//Luo uuden sakotetun
app.post('/api/sakotetut', (req, res) => {
    const body = req.body
    //tarkastetaan, että avaimet löytyvät bodysta
    if (!body.nimi || !body.ika || !body.paikkakunta) {
        return res.status(400).json({ 
            error: 'Sisältöä puuttuu!' 
        })
    }

    //Tarkastetaan, ettei henkilöä ole jo kirjattuna tauluun
  for(let i=0; i<sakotetut.length; i++){
    if(sakotetut[i].nimi.toLowerCase() === body.nimi.toLowerCase() &&
      sakotetut[i].ika == body.ika &&
      sakotetut[i].paikkakunta.toLowerCase() === body.paikkakunta.toLowerCase()){
          return res.status(400).json({
            error: 'Tämä kyseinen kaveri on jo kärähtänyt ja merkitty rekisteriin.'
        })
        
      }
  }

      const sakotettu = {
        id: generateId(sakotetut),
        nimi: body.nimi,
        ika: body.ika,
        paikkakunta: body.paikkakunta,
      }

      console.log(sakotettu.id)
      sakotetut = sakotetut.concat(sakotettu)
      res.json(sakotettu)
})

//Poistaa id:n perusteella sakotetun
app.delete('/api/sakotetut/:id', (req, res) => {
    const id = Number(req.params.id)
    sakotetut = sakotetut.filter(sakotettu => sakotettu.id !== id)
  
    res.status(204).end()
  })

app.use(unknownEndpoint)

//Asetetaan sovellus kuuntelemaan porttia 3001
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

