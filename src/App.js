import './App.css';
import logo from './logo.svg';
import { useState } from "react"
import { Header } from './Components/Header';
import { Alert } from './Components/Header';
import { CardsSlider } from './Components/CardsSlider';
import { Card } from "./Components/CardComps/Card"
import { SectionTitle } from "./Components/SectionTitle";
import { ItemsSlider } from "./Components/ItemsSlider";
import { Item } from './Components/Item';
import { SearchBar } from './Components/SearchBar';
import { Form } from './Components/Form';
import { Closure } from './Components/Closure';
import { Results } from './Components/Results';


const shownRestaurants = [
  {
    resId: "r1",
    resHandle:"crepesandwaffles", 
    resName:"Crepes & Waffles",
    resAddress:"Cra 51 # 76 - 47 Barranquilla",
  },
  {
    resId: "r2",
    resHandle: "benitojuarez",
    resName:"Benito Juárez",
    resAddress:"Cra 46 # 85 - 12 Barranquilla",
  },
  {
    resId: "r3",
    resHandle: "porthos",
    resName:"Porthos Steakhouse & Pub",
    resAddress:"Cra 53 No 85 - 61 Barranquilla",
  },
  {
    resId: "r4",
    resHandle:"cucayo", 
    resName:"Cucayo",
    resAddress:"Cra 49c 76 - 224 Barranquilla",
  },
  {
    resId: "r5",
    resHandle: "lahierra",
    resName:"La Hierra",
    resAddress:"Calle 84 # 44-29 Barranquilla",
  },
]

const mainUser = {
  personId: "u1",
  personName: "",
  personAvatar: "av3.png",
  personMethod: "cash",
  personOrderValue: 0,
  personOrder: {
    starters: [
      {id: "i1", name: "", value: ""},
      // {id: "i1", name: "Alitas de Pollo", value: 16100},
      // {id: "i2", name: "Nachos con Queso", value: 10900},
    ],
    mains: [
      {id: "i1", name: "", value: ""},
      // {id: "i1", name: "Tacos al Pastor ", value: 18300},
    ],
    drinks: [
      {id: "i1", name: "", value: ""},
      // {id: "i1", name: "Té caliente", value: 3500},
      // {id: "i2", name: "Té de durazno", value: 2800},
      // {id: "i3", name: "Copa de Vino", value: 13500},
      // {id: "i4", name: "Cerveza", value: 8200},
    ],
    desserts: [
      {id: "i1", name: "", value: ""},
      // {id: "i1", name: "Cheesecake de Oreo", value: 5900},
      // {id: "i2", name: "Flan de Nutella", value: 8000},
      // {id: "i3", name: "Helado de Arequipe", value: 7500},
    ],
    tipPercent: 0,
  },
}

const people = [
  {
    personId: "p1",
    personName: "Maria P.",
    personAvatar: "av3.png",
    personMethod: "cash",
    personTable: "cumpledeshir",
    personOrder: {
      starters: {
          0 : {name: "Ensalada de la Barra", value: 27200},
          // 1 : {name: "Alitas de Pollo", value: 16100},
          // 2 : {name: "Nachos con Queso", value: 10900},
      },
      mains: {
          // 0 : {name: "Crepe Pollo y Queso", value: 23700},
          // 1 : {name: "Tacos al Pastor ", value: 18300},
      },
      drinks: {
          // 0 : {name: "Gaseosa", value: 7500},
          // 1 : {name: "Té caliente", value: 3500},
          // 2 : {name: "Té de durazno", value: 2800},
          // 3 : {name: "Copa de Vino", value: 13500},
          // 4 : {name: "Cerveza", value: 8200},
      },
      desserts: {
          // 0 : {name: "Milhojas de Arequipe", value: 9300},
          // 1 : {name: "Cheesecake de Oreo", value: 5900},
          // 2 : {name: "Flan de Nutella", value: 8000},
          // 3 : {name: "Helado de Arequipe", value: 7500},
      },
      tipPercent: 0,
    },
  },
  {
    personId: "p2",
    personName: "Juan D.",
    personAvatar: "av1.png",
    personMethod: "card",
    personTable: "cumpledeshir",
    personOrder: {
      starters: {
          0 : {name: "Alitas picantes", value: 22300},
      },
      mains: {
          0 : {name: "Enchilada de carne", value: 35200},
          1 : {name: "Tacos al pastor", value: 22000},
      },
      drinks: {
          0 : {name: "Limonada de coco", value: 9800},
          0 : {name: "Café tinto", value: 1500},
      },
      desserts: {
          0 : {name: "Flan de caramelo", value: 12300},
      },
      tipPercent: 10,
    },
  },
]

const miniApps = [
  {
    appId: "a1",
    appLogo: "chat_logo.png",
    appName: "Chat Local Anónimo",
    appBgColor: "bg-[#FEE036]"
  },
  {
    appId: "a2",
    appLogo: "split_logo.png",
    appName: "Divide la Cuenta",
    appBgColor: "bg-orange-400"
  },
  {
    appId: "a3",
    appLogo: "calories_logo.png",
    appName: "Toral de Calorías",
    appBgColor: "bg-blue-400"
  },
  {
    appId: "a4",
    appLogo: "games_logo.png",
    appName: "Juegos de Mesa",
    appBgColor: "bg-purple-400"
  },
  {
    appId: "a5",
    appLogo: "tips_logo.png",
    appName: "Calcula mi Propina",
    appBgColor: "bg-red-400"
  },
  {
    appId: "a6",
    appLogo: "washere_logo.png",
    appName: "¿Estuvo aquí?",
    appBgColor: "bg-[#FEE036]"
  },
  {
    appId: "a7",
    appLogo: "bathstatus_logo.png",
    appName: "Estado del Baño",
    appBgColor: "bg-orange-400"
  },
  {
    appId: "a8",
    appLogo: "escape_logo.png",
    appName: "Ruta de Escape",
    appBgColor: "bg-blue-400"
  },
  {
    appId: "a9",
    appLogo: "wifi_logo.png",
    appName: "WiFi",
    appBgColor: "bg-purple-400"
  },
]

function App() {
  const [page, setPage] = useState('home')
  const [user, setUser] = useState(mainUser)
  const [satPeople, setSatPeople] = useState(people);
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [tableName, setTableName] = useState('');
  const [visible, setVisible] = useState(false)

  const searchedRestaurants = shownRestaurants.filter(
    (r) => {
      const restaurantName = r.resName.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase()
      const restaurantSearch = searchValue.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase()
      return restaurantName.includes(restaurantSearch);
    }
  );

  const totalSatPeople = satPeople.length

  return (
    <>
      <Header 
        logoClick={() => {setOpen(false); setPage('home')}}
        page={page}
        tableName={tableName}
        setSearchValue={setSearchValue}      
      />
      {page == "home" || page == "table" ?<Alert />:""}
      <CardsSlider
        page={page}
      >
        {searchedRestaurants.map(restaurant => (
          <Card 
          key={restaurant.resId}
          isSmall={open}
          onClick={() => {setOpen(true); setPage('info')}}
          resHandle={restaurant.resHandle}
          resName={restaurant.resName}
          resAddress={restaurant.resAddress}
          page={page}
          setPage={setPage}
          tableName={tableName}
          setSearchValue={setSearchValue}
          visible={visible}
          setVisible={setVisible}
          user={user}
          setUser={setUser}
          />
        ))}
      </CardsSlider>
      {page == "info" &&<Form
                setTableName={setTableName}
                page={page}
                setPage={setPage}
                user={user}
                setUser={setUser}
      />}
      {page == "table" && !visible ? 
      <SectionTitle
      titleText={"Tu mesa"}
      linkText={"¿Alguien sin internet?"}
      linkURL={""}
      hasLink={true}
      hasCounter={true}
      totalItems={totalSatPeople}
      />
    :""}
      {page == "table" && !visible ?
      <ItemsSlider>
        <Item
          itemImage= {user.personAvatar}
          itemName= {user.personName}
          itemOverlay= {user.personMethod}
          isAvatar={true}
        />
        {satPeople.map(person => (
          <Item
          key= {person.personId}
          itemImage= {person.personAvatar}
          itemName= {person.personName}
          itemOverlay= {person.personMethod}
          isAvatar={true}
          />
          ))}
      </ItemsSlider>
      :""}
      {page == "home" && !visible || 
      page == "table" && !visible ? 
      <SectionTitle
        titleText={"Mini apps"}
        linkText={"Ver Todas"}
        linkURL={""}
        hasLink={true}
        hasCounter={false}
      />:""}
      {page == "home" && !visible || 
      page == "table" && !visible ? 
      <ItemsSlider>
        {miniApps.map(app => (
          <Item
            key= {app.appId}
            itemImage= {app.appLogo}
            itemName= {app.appName}
            itemBgColor= {app.appBgColor}
            itemOverlay={false}
            isAvatar={false}
          />
        ))}
      </ItemsSlider>:""}
      {page == "home" && <SearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />}
      {page == "table" && !visible ? <Closure
      totalSatPeople={totalSatPeople}
      page={page}
      setPage={setPage}
      orderValue={user.personOrderValue}
      />:""}
      {page == "closed" && <Results
      />}
    </>
  );
}

export default App;
