import React from 'react'
import styles from './AgentList.module.css'
import { Link } from 'react-router-dom'

  var myJson = `{
    "data": {
      "agents": [
        {
          "name": "Jett",
          "function": "Duelista",
          "description": "Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.",
          "skills": [
            {
              "type": 1,
              "damage": 5
            },
            {
              "type": 2,
              "damage": 8
            },
            {
              "type": 3,
              "damage": 10
            },
            {
              "type": 4,
              "damage": 30
            }
          ],
          "image": "jett.png"
        },
        {
          "name": "Raze",
          "function": "Sentinela",
          "description": "Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.",
          "skills": [
            {
              "type": 1,
              "damage": 6
            },
            {
              "type": 2,
              "damage": 3
            },
            {
              "type": 3,
              "damage": 13
            },
            {
              "type": 4,
              "damage": 25
            }
          ],
          "image": "raze.png"
        },
        {
          "name": "Breach",
          "function": "Duelista",
          "description": "Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.",
          "skills": [
            {
              "type": 1,
              "damage": 5
            },
            {
              "type": 2,
              "damage": 8
            },
            {
              "type": 3,
              "damage": 15
            },
            {
              "type": 4,
              "damage": 10
            }
          ],
          "image": "breach.png"
        },
        {
          "name": "Omen",
          "function": "Controlador",
          "description": "Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.",
          "skills": [
            {
              "type": 1,
              "damage": 9
            },
            {
              "type": 2,
              "damage": 5
            },
            {
              "type": 3,
              "damage": 10
            },
            {
              "type": 4,
              "damage": 20
            }
          ],
          "image": "omen.png"
        },
        {
          "name": "Brimstone",
          "function": "Iniciador",
          "description": "Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.",
          "skills": [
            {
              "type": 1,
              "damage": 5
            },
            {
              "type": 2,
              "damage": 5
            },
            {
              "type": 3,
              "damage": 10
            },
            {
              "type": 4,
              "damage": 20
            }
          ],
          "image": "brimstone.png"
        },
        {
          "name": "Phoenix",
          "function": "Duelista",
          "description": "Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.",
          "skills": [
            {
              "type": 1,
              "damage": 15
            },
            {
              "type": 2,
              "damage": 8
            },
            {
              "type": 3,
              "damage": 10
            },
            {
              "type": 4,
              "damage": 30
            }
          ],
          "image": "phoenix.png"
        },
        {
          "name": "Sage",
          "function": "Iniciador",
          "description": "Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.",
          "skills": [
            {
              "type": 1,
              "damage": 25
            },
            {
              "type": 2,
              "damage": 4
            },
            {
              "type": 3,
              "damage": 15
            },
            {
              "type": 4,
              "damage": 25
            }
          ],
          "image": "sage.png"
        },
        {
          "name": "Sova",
          "function": "Duelista",
          "description": "Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.",
          "skills": [
            {
              "type": 1,
              "damage": 5
            },
            {
              "type": 2,
              "damage": 10
            },
            {
              "type": 3,
              "damage": 10
            },
            {
              "type": 4,
              "damage": 40
            }
          ],
          "image": "sova.png"
        },
        {
          "name": "Viper",
          "function": "Duelista",
          "description": "Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.",
          "skills": [
            {
              "type": 1,
              "damage": 12
            },
            {
              "type": 2,
              "damage": 18
            },
            {
              "type": 3,
              "damage": 20
            },
            {
              "type": 4,
              "damage": 15
            }
          ],
          "image": "viper.png"
        },
        {
          "name": "Cypher",
          "function": "Controlador",
          "description": "Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.",
          "skills": [
            {
              "type": 1,
              "damage": 10
            },
            {
              "type": 2,
              "damage": 15
            },
            {
              "type": 3,
              "damage": 10
            },
            {
              "type": 4,
              "damage": 20
            }
          ],
          "image": "cypher.png"
        },
        {
          "name": "Reyna",
          "function": "Iniciador",
          "description": "Devonshire rex. Devonshire rex birman but sphynx savannah panther lynx british shorthair. Tiger. Burmese british shorthair savannah but ocicat siamese for norwegian forest. American shorthair cornish rex american bobtail puma sphynx. Tabby munchkin savannah turkish angora, siamese yet tabby. Siberian grimalkin, birman so lynx but abyssinian tomcat. Ocicat scottish fold but devonshire rex.",
          "skills": [
            {
              "type": 1,
              "damage": 14
            },
            {
              "type": 2,
              "damage": 18
            },
            {
              "type": 3,
              "damage": 27
            },
            {
              "type": 4,
              "damage": 45
            }
          ],
          "image": "reyna.png"
        }
        
      ],
      
      "guns": {
        "primaryGun": [
          "gun6.png",
          "gun7.png",
          "gun8.png",
          "gun11.png",
          "gun12.png"
        ],
        "secondaryGun": [
          "./guns/gun14.png",
          "./guns/gun15.png",
          "./guns/gun13.png",
          "./guns/gun9.png",
          "./guns/gun10.png"
        ],
        "steel": [
          "./guns/gun1.png",
          "./guns/gun2.png",
          "./guns/gun3.png",
          "./guns/gun4.png",
          "./guns/gun5.png"
        ]
      },
      "maps": [
        "./maps/map1.png",
        "./maps/map2.png",
        "./maps/map3.png",
        "./maps/map4.png",
        "./maps/map5.png"
      ]
    }
  }`;

//FIM DO JSON


var myData = JSON.parse(myJson);
var data = myData.data



 

const AgentsList = () => {
  return(
  <>
  <h1>AGENTES</h1>
  <div className={styles.container}>
    
    {data.agents.map((agent,index) => (
      <>
        <div key={index} className={`${styles.agentCard} `}>
          <img src={require(`../../Assets/agents/${agent.image}`)}/>
          <p>{agent.name.toUpperCase()}</p>
        </div>
      </>
    ))}
    <Link to="/agents"><div className={`${styles.agentCard}`}>
     <p>Ver Todos</p>
    </div></Link>
  </div> 
  </>
  )
}

export default AgentsList