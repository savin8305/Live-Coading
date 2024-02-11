import React from 'react';
import Jobs from './job';

const page: React.FC = () => {
  // Assuming jobs data is fetched or defined here
  const jobs=[
    {
      "_id": "65c8af30195654d0a30925d3",
      "company_name": "NURALI",
      "title": "Data Analyst",
      "description": "Ullamco minim proident laboris eiusmod occaecat labore excepteur. Occaecat excepteur proident do fugiat dolor voluptate aliqua voluptate non laboris laboris. Id anim excepteur velit pariatur consequat dolor deserunt cillum adipisicing. Fugiat in aliqua consectetur cupidatat aute reprehenderit do cupidatat est ea pariatur eiusmod. Lorem minim pariatur id ad labore pariatur voluptate.\r\n",
      "remote": true,
      "url": "http://example.com/job/0",
      "tags": [
        "irure",
        "esse",
        "laboris"
      ],
      "job_types": [
        "Freelance"
      ],
      "location": "Accoville, District Of Columbia, United States",
      "created_at": "2023-02-09T10:24:33 -06:-30"
    },
    {
      "_id": "65c8af30233d5b904c14e469",
      "company_name": "MENBRAIN",
      "title": "Software Engineer",
      "description": "Cupidatat id amet adipisicing sit anim occaecat. Anim eiusmod laborum esse commodo dolore nulla in amet esse id. Aute est reprehenderit minim irure sint amet nulla ullamco eu proident aliquip sint esse proident. Commodo laboris amet consequat ex eu fugiat aliqua ex occaecat est id eu.\r\n",
      "remote": true,
      "url": "http://example.com/job/1",
      "tags": [
        "anim",
        "excepteur",
        "pariatur"
      ],
      "job_types": [
        "Part-time"
      ],
      "location": "Wauhillau, Washington, Saudi Arabia",
      "created_at": "2023-06-10T12:48:24 -06:-30"
    },
    {
      "_id": "65c8af308b031bb40a3aa373",
      "company_name": "PASTURIA",
      "title": "Project Manager",
      "description": "Non ad adipisicing dolore veniam non cupidatat ut nostrud incididunt sint elit ad amet. Aliquip ut reprehenderit labore ea ut est ad magna adipisicing. Aute consequat incididunt do incididunt exercitation esse ullamco fugiat. Ipsum ex mollit amet enim nostrud est labore aliqua et aliqua sint est eu. Mollit sit sint velit ut nulla pariatur nulla veniam labore sunt quis. Aliqua sunt mollit pariatur commodo sit nulla ex reprehenderit fugiat esse. Sunt deserunt deserunt id est cupidatat non ex ullamco eu velit reprehenderit labore sunt.\r\n",
      "remote": false,
      "url": "http://example.com/job/2",
      "tags": [
        "duis",
        "non",
        "dolor"
      ],
      "job_types": [
        "Part-time"
      ],
      "location": "Ola, Texas, Belize",
      "created_at": "2023-10-23T02:02:14 -06:-30"
    },
    {
      "_id": "65c8af30640d17574cd373d7",
      "company_name": "ZOLAR",
      "title": "Project Manager",
      "description": "Lorem sint voluptate reprehenderit id ad est est est elit sit veniam elit nostrud. Sit aliquip do commodo exercitation irure sint qui ea excepteur. Incididunt excepteur aute tempor deserunt in adipisicing commodo in eu aliqua irure esse ea. Laboris labore esse adipisicing aliquip officia est et ut eiusmod exercitation elit. Et proident qui cupidatat nulla occaecat pariatur. Nostrud consequat minim labore pariatur dolore culpa enim pariatur. Elit consectetur sunt ut irure sit consectetur amet culpa esse.\r\n",
      "remote": false,
      "url": "http://example.com/job/3",
      "tags": [
        "ipsum",
        "esse",
        "veniam"
      ],
      "job_types": [
        "Freelance"
      ],
      "location": "Knowlton, Wyoming, Faroe Islands",
      "created_at": "2023-10-20T12:20:38 -06:-30"
    },
    {
      "_id": "65c8af30073056312a33560d",
      "company_name": "KRAGGLE",
      "title": "Marketing Manager",
      "description": "Laborum magna adipisicing sit mollit ullamco sit proident ad. Voluptate culpa occaecat officia reprehenderit exercitation velit aliquip deserunt fugiat. Adipisicing consequat dolore anim cillum labore veniam ipsum culpa exercitation magna ad. Irure anim do aliquip veniam deserunt commodo voluptate. Tempor eiusmod qui mollit pariatur aliqua laborum officia commodo. Irure quis et veniam commodo do qui.\r\n",
      "remote": true,
      "url": "http://example.com/job/4",
      "tags": [
        "aute",
        "magna",
        "ipsum"
      ],
      "job_types": [
        "Freelance"
      ],
      "location": "Cochranville, Missouri, Peru",
      "created_at": "2023-09-21T07:21:23 -06:-30"
    },
    {
      "_id": "65c8af3053a9758b2f54f045",
      "company_name": "LUNCHPAD",
      "title": "Software Engineer",
      "description": "Esse nisi ea voluptate non reprehenderit aliquip quis est aute sint. Proident consequat do amet proident culpa pariatur commodo tempor. Magna quis velit Lorem fugiat ex anim. Enim voluptate qui anim dolore qui reprehenderit laborum fugiat. Aliqua in magna sunt duis ut occaecat ex duis aliqua deserunt. Amet quis adipisicing adipisicing culpa in reprehenderit id incididunt culpa duis aute enim culpa dolore.\r\n",
      "remote": true,
      "url": "http://example.com/job/5",
      "tags": [
        "quis",
        "ea",
        "qui"
      ],
      "job_types": [
        "Part-time"
      ],
      "location": "Selma, North Carolina, Antigua and Barbuda",
      "created_at": "2023-09-04T07:22:14 -06:-30"
    },
    {
      "_id": "65c8af300da52b86d6f08dcb",
      "company_name": "TUBALUM",
      "title": "Data Analyst",
      "description": "Aliqua aliqua irure et eiusmod laboris quis non velit in nisi eiusmod do. Tempor reprehenderit excepteur deserunt ut est magna eu eiusmod exercitation velit. Non consequat quis est cillum.\r\n",
      "remote": false,
      "url": "http://example.com/job/6",
      "tags": [
        "tempor",
        "cupidatat",
        "consectetur"
      ],
      "job_types": [
        "Freelance"
      ],
      "location": "Southmont, Nebraska, Wallis and Futuna Islands",
      "created_at": "2023-04-24T02:27:00 -06:-30"
    },
    {
      "_id": "65c8af30dfa0e3106d24fcd3",
      "company_name": "DUOFLEX",
      "title": "Project Manager",
      "description": "Veniam exercitation veniam mollit dolore deserunt tempor excepteur dolor aliqua pariatur. Fugiat anim officia voluptate nostrud ea consectetur Lorem ea pariatur. Laboris qui veniam non dolore magna occaecat do in ad elit.\r\n",
      "remote": false,
      "url": "http://example.com/job/7",
      "tags": [
        "nostrud",
        "fugiat",
        "reprehenderit"
      ],
      "job_types": [
        "Full-time"
      ],
      "location": "Springville, New Jersey, Malaysia",
      "created_at": "2023-05-15T06:28:10 -06:-30"
    },
    {
      "_id": "65c8af3077733259fb9e8aa1",
      "company_name": "KONGLE",
      "title": "Data Analyst",
      "description": "Aute labore excepteur occaecat dolore pariatur minim velit sunt irure ea cillum dolore sit amet. Ipsum voluptate et duis non pariatur tempor quis velit ullamco veniam. Ad irure dolore elit adipisicing id reprehenderit enim et voluptate mollit pariatur Lorem eu ea.\r\n",
      "remote": false,
      "url": "http://example.com/job/8",
      "tags": [
        "quis",
        "enim",
        "eu"
      ],
      "job_types": [
        "Contract"
      ],
      "location": "Vallonia, Maine, Bahamas",
      "created_at": "2023-06-03T04:52:14 -06:-30"
    },
    {
      "_id": "65c8af30ac216cdb7ee2bb62",
      "company_name": "KYAGORO",
      "title": "Project Manager",
      "description": "Aliqua reprehenderit anim Lorem magna irure. Lorem ad non occaecat anim sint minim et qui dolore id consectetur laborum excepteur. Enim mollit deserunt ut laborum elit proident exercitation commodo minim non sint magna. Nostrud occaecat cillum consectetur voluptate quis exercitation fugiat excepteur ea duis anim Lorem. Nisi ut fugiat minim cupidatat nisi adipisicing proident sint id pariatur esse officia ipsum. Voluptate amet aliquip nostrud in ullamco aliqua. Qui labore cillum nulla magna culpa.\r\n",
      "remote": true,
      "url": "http://example.com/job/9",
      "tags": [
        "id",
        "labore",
        "consequat"
      ],
      "job_types": [
        "Full-time"
      ],
      "location": "Bison, West Virginia, Vanuatu",
      "created_at": "2023-08-21T09:21:45 -06:-30"
    },
    {
      "_id": "65c8af3045ddabbe6e9bf484",
      "company_name": "AQUASSEUR",
      "title": "Data Analyst",
      "description": "Sunt eiusmod irure ea reprehenderit irure irure labore eu. Dolore exercitation non sit eu et consequat officia. Magna incididunt consectetur veniam ea eu est aliqua.\r\n",
      "remote": true,
      "url": "http://example.com/job/10",
      "tags": [
        "enim",
        "dolore",
        "commodo"
      ],
      "job_types": [
        "Full-time"
      ],
      "location": "Alden, Montana, Korea (South)",
      "created_at": "2023-07-13T06:58:32 -06:-30"
    },
    {
      "_id": "65c8af30119bc3e209a938ed",
      "company_name": "GRACKER",
      "title": "Marketing Manager",
      "description": "Anim laborum deserunt velit eu officia aliqua consequat nisi ex veniam consequat. Minim sit nulla sit do Lorem laborum exercitation incididunt qui sint non ullamco sit. Deserunt enim quis irure commodo minim magna qui id et consequat. Consectetur esse sit mollit fugiat est id ipsum nisi. Nisi esse amet cupidatat tempor do adipisicing occaecat ullamco culpa deserunt. Nostrud cupidatat ex aute eu sunt et adipisicing. Eiusmod proident deserunt fugiat mollit quis.\r\n",
      "remote": false,
      "url": "http://example.com/job/11",
      "tags": [
        "aute",
        "aute",
        "proident"
      ],
      "job_types": [
        "Part-time"
      ],
      "location": "Maplewood, New Hampshire, Sudan",
      "created_at": "2023-05-08T04:02:45 -06:-30"
    },
    {
      "_id": "65c8af304754d199389d4c2c",
      "company_name": "IDEGO",
      "title": "Marketing Manager",
      "description": "Sint adipisicing sit eiusmod irure magna sint do. Ipsum anim aliqua ipsum eiusmod sit ipsum quis. Consequat irure sit excepteur non cillum officia nulla sit sint culpa Lorem tempor ut. Tempor sunt quis exercitation consectetur commodo labore incididunt.\r\n",
      "remote": false,
      "url": "http://example.com/job/12",
      "tags": [
        "veniam",
        "cillum",
        "dolore"
      ],
      "job_types": [
        "Contract"
      ],
      "location": "Mayfair, Kentucky, Colombia",
      "created_at": "2023-01-04T01:45:28 -06:-30"
    },
    {
      "_id": "65c8af3083d6eb6464c4339c",
      "company_name": "NAXDIS",
      "title": "Sales Representative",
      "description": "Cillum laborum fugiat occaecat consequat sit proident magna sit eiusmod anim. Fugiat consequat labore laborum dolor velit irure exercitation. Nisi cupidatat nisi mollit elit cillum elit proident et. Labore sint ut eiusmod veniam reprehenderit quis occaecat Lorem nulla officia eu. Occaecat eu nostrud voluptate duis.\r\n",
      "remote": true,
      "url": "http://example.com/job/13",
      "tags": [
        "anim",
        "eu",
        "duis"
      ],
      "job_types": [
        "Part-time"
      ],
      "location": "Vandiver, Arkansas, Argentina",
      "created_at": "2023-02-08T01:36:58 -06:-30"
    },
    {
      "_id": "65c8af30756eb8b730a77dd9",
      "company_name": "COMSTAR",
      "title": "Sales Representative",
      "description": "Anim qui minim est veniam duis commodo irure laboris. Elit sit ad culpa aliquip voluptate non reprehenderit pariatur ad. Quis sit occaecat ut occaecat ut anim. Consectetur occaecat eiusmod cupidatat nulla nisi consectetur nisi. Consectetur veniam dolor mollit deserunt magna.\r\n",
      "remote": true,
      "url": "http://example.com/job/14",
      "tags": [
        "cillum",
        "occaecat",
        "et"
      ],
      "job_types": [
        "Freelance"
      ],
      "location": "Waterford, Pennsylvania, Ghana",
      "created_at": "2023-12-25T01:19:06 -06:-30"
    },
    {
      "_id": "65c8af3017ce95e038ffa9c7",
      "company_name": "SNACKTION",
      "title": "Sales Representative",
      "description": "Eiusmod aliquip dolore reprehenderit qui commodo laboris amet ex incididunt sint sunt est reprehenderit irure. Elit proident ad duis minim fugiat irure nostrud laborum consequat. Qui commodo consequat labore excepteur magna ad. Sunt esse pariatur deserunt eiusmod est. Aliquip labore sit exercitation nostrud esse cupidatat pariatur reprehenderit elit proident laboris proident do est. Deserunt amet pariatur esse anim culpa voluptate deserunt eiusmod voluptate nostrud. Proident non do minim ex commodo veniam labore nisi do sit laborum amet.\r\n",
      "remote": true,
      "url": "http://example.com/job/15",
      "tags": [
        "pariatur",
        "qui",
        "officia"
      ],
      "job_types": [
        "Contract"
      ],
      "location": "Leola, New Mexico, Portugal",
      "created_at": "2023-11-21T07:28:12 -06:-30"
    },
    {
      "_id": "65c8af3051f03dc5d5b417d1",
      "company_name": "METROZ",
      "title": "Sales Representative",
      "description": "Do irure voluptate non sit commodo nisi cillum ex do nulla fugiat irure adipisicing nisi. Nulla amet eu occaecat elit ea adipisicing laborum ex velit minim velit deserunt. Ullamco excepteur ut eiusmod sint nulla incididunt labore fugiat velit. Minim pariatur consectetur reprehenderit anim anim exercitation elit dolore officia. Deserunt laboris pariatur laborum reprehenderit officia commodo minim sunt tempor occaecat est laboris et tempor. Voluptate dolor cillum tempor ad minim dolor. Occaecat eu cillum cillum id amet esse magna ut anim nisi.\r\n",
      "remote": false,
      "url": "http://example.com/job/16",
      "tags": [
        "aute",
        "consequat",
        "est"
      ],
      "job_types": [
        "Full-time"
      ],
      "location": "Faywood, Marshall Islands, Montserrat",
      "created_at": "2023-10-25T02:24:08 -06:-30"
    },
    {
      "_id": "65c8af30eba409e3c06fc532",
      "company_name": "ZOINAGE",
      "title": "Data Analyst",
      "description": "Do quis id sint nostrud incididunt veniam pariatur nostrud pariatur magna. Veniam dolore irure consequat aliquip Lorem aliqua. Id id aliquip dolor amet in. Amet occaecat et qui laborum commodo quis pariatur aute pariatur. Dolore consequat exercitation voluptate adipisicing amet ex esse proident in. Dolor incididunt adipisicing laboris excepteur ea pariatur duis Lorem sint ullamco exercitation dolore.\r\n",
      "remote": false,
      "url": "http://example.com/job/17",
      "tags": [
        "reprehenderit",
        "ut",
        "ad"
      ],
      "job_types": [
        "Freelance"
      ],
      "location": "Darlington, Mississippi, Palau",
      "created_at": "2023-11-16T07:21:04 -06:-30"
    },
    {
      "_id": "65c8af306fb9887bff35ffdc",
      "company_name": "SURELOGIC",
      "title": "Sales Representative",
      "description": "Adipisicing anim ipsum ipsum ea ipsum occaecat reprehenderit sit dolor laboris enim nisi aliquip. Ipsum mollit laborum elit voluptate ad. Elit aute irure ad exercitation reprehenderit id cillum anim ex esse laboris aliqua ad. Aliqua dolore quis minim in ex. Magna consectetur pariatur occaecat tempor ex magna. Labore commodo veniam qui amet sunt veniam consectetur qui cupidatat anim in qui.\r\n",
      "remote": true,
      "url": "http://example.com/job/18",
      "tags": [
        "nulla",
        "amet",
        "pariatur"
      ],
      "job_types": [
        "Part-time"
      ],
      "location": "Cresaptown, South Dakota, Tonga",
      "created_at": "2023-03-23T09:59:41 -06:-30"
    },
    {
      "_id": "65c8af30aa19f5402c0f2fd5",
      "company_name": "UNCORP",
      "title": "Software Engineer",
      "description": "Ut culpa id dolor aliquip aute dolore incididunt elit. Eu voluptate laboris dolor et nostrud cupidatat consequat consectetur. Magna tempor aliquip non consequat duis mollit laborum sunt exercitation cupidatat id minim ex cupidatat. Officia id in aliquip fugiat. Nulla excepteur amet ipsum commodo ipsum ea dolore mollit ut. Ex ad do ea aute pariatur adipisicing veniam excepteur Lorem ea esse.\r\n",
      "remote": false,
      "url": "http://example.com/job/19",
      "tags": [
        "est",
        "sit",
        "dolore"
      ],
      "job_types": [
        "Contract"
      ],
      "location": "Allendale, Hawaii, Myanmar",
      "created_at": "2023-09-16T10:17:27 -06:-30"
    },
    {
      "_id": "65c8af306578a6834986781a",
      "company_name": "ISOTRONIC",
      "title": "Project Manager",
      "description": "Et ullamco ut ad ad id officia fugiat cillum excepteur ex. Quis anim nostrud qui sit proident sunt irure ut fugiat et et adipisicing. Et nisi exercitation mollit id officia.\r\n",
      "remote": true,
      "url": "http://example.com/job/20",
      "tags": [
        "excepteur",
        "ad",
        "velit"
      ],
      "job_types": [
        "Part-time"
      ],
      "location": "Henrietta, Guam, New Zealand",
      "created_at": "2023-06-15T07:47:45 -06:-30"
    },
    {
      "_id": "65c8af301fedc9bac3b26aa0",
      "company_name": "GOLOGY",
      "title": "Marketing Manager",
      "description": "Voluptate cupidatat cupidatat dolore ad dolor proident quis exercitation anim tempor. Lorem sunt pariatur elit pariatur consequat adipisicing eu aute aliquip magna pariatur. Eu laborum amet ad voluptate ex eu minim non. Cupidatat in tempor exercitation pariatur nisi non dolor nulla dolore. Ullamco sint non aute nulla nisi reprehenderit dolor irure. Pariatur sit minim non sit labore sunt esse fugiat eu.\r\n",
      "remote": true,
      "url": "http://example.com/job/21",
      "tags": [
        "ea",
        "aute",
        "aute"
      ],
      "job_types": [
        "Contract"
      ],
      "location": "Madrid, Wisconsin, S. Georgia and S. Sandwich Isls.",
      "created_at": "2023-05-10T07:02:22 -06:-30"
    },
    {
      "_id": "65c8af30f6d4d4dfdbe720f7",
      "company_name": "COLUMELLA",
      "title": "Marketing Manager",
      "description": "Enim proident reprehenderit reprehenderit magna quis eiusmod ipsum cillum. Dolore qui consequat sint sint. Esse laboris incididunt eu Lorem nostrud est adipisicing reprehenderit do. Commodo occaecat mollit eiusmod velit officia adipisicing.\r\n",
      "remote": false,
      "url": "http://example.com/job/22",
      "tags": [
        "labore",
        "occaecat",
        "exercitation"
      ],
      "job_types": [
        "Part-time"
      ],
      "location": "Salunga, Illinois, Ukraine",
      "created_at": "2023-11-09T02:27:32 -06:-30"
    },
    {
      "_id": "65c8af308b4bc5532dc20489",
      "company_name": "CORECOM",
      "title": "Marketing Manager",
      "description": "Occaecat ut adipisicing anim ullamco incididunt nisi ipsum veniam ad do veniam sint ut ea. Culpa consequat tempor in id cupidatat sit. Cillum eu quis voluptate eiusmod.\r\n",
      "remote": true,
      "url": "http://example.com/job/23",
      "tags": [
        "nisi",
        "ea",
        "eiusmod"
      ],
      "job_types": [
        "Contract"
      ],
      "location": "Fingerville, Idaho, Bulgaria",
      "created_at": "2023-02-14T10:04:13 -06:-30"
    },
    {
      "_id": "65c8af30be75b7015679c6ac",
      "company_name": "POWERNET",
      "title": "Marketing Manager",
      "description": "Sint esse qui eu esse nostrud veniam veniam. Qui deserunt nisi mollit non et. Sint reprehenderit duis consectetur ea qui amet velit occaecat dolor mollit est ad esse occaecat.\r\n",
      "remote": true,
      "url": "http://example.com/job/24",
      "tags": [
        "sint",
        "incididunt",
        "non"
      ],
      "job_types": [
        "Contract"
      ],
      "location": "Dyckesville, Virgin Islands, Bhutan",
      "created_at": "2023-04-04T04:38:37 -06:-30"
    },
    {
      "_id": "65c8af307f69d6c91e75d46f",
      "company_name": "TASMANIA",
      "title": "Project Manager",
      "description": "Duis eiusmod sint officia proident. Tempor non mollit do anim. Incididunt duis adipisicing qui non nulla cillum irure in. Qui irure sint eiusmod fugiat occaecat tempor proident irure. Proident occaecat et eiusmod duis officia duis ad. Mollit minim sit enim irure aliqua quis ut ex proident qui.\r\n",
      "remote": false,
      "url": "http://example.com/job/25",
      "tags": [
        "duis",
        "pariatur",
        "velit"
      ],
      "job_types": [
        "Part-time"
      ],
      "location": "Coloma, Alaska, Australia",
      "created_at": "2023-10-26T08:01:20 -06:-30"
    },
    {
      "_id": "65c8af3029a491811b509c5c",
      "company_name": "THREDZ",
      "title": "Project Manager",
      "description": "Non ut anim dolore quis do nostrud consequat id labore laborum non. Qui id dolore do magna cillum. Deserunt magna id duis magna ut laborum cillum aliqua pariatur dolore culpa. Tempor nostrud qui irure proident amet eu ullamco nisi nostrud anim.\r\n",
      "remote": true,
      "url": "http://example.com/job/26",
      "tags": [
        "culpa",
        "voluptate",
        "sunt"
      ],
      "job_types": [
        "Freelance"
      ],
      "location": "Orviston, North Dakota, Norway",
      "created_at": "2024-01-24T05:52:20 -06:-30"
    },
    {
      "_id": "65c8af30f75dd028f60a6432",
      "company_name": "SEQUITUR",
      "title": "Software Engineer",
      "description": "Dolor deserunt pariatur pariatur incididunt commodo magna nulla mollit. Quis duis ut duis reprehenderit amet amet consequat non fugiat. Laborum laborum laborum eu nulla.\r\n",
      "remote": false,
      "url": "http://example.com/job/27",
      "tags": [
        "velit",
        "ut",
        "esse"
      ],
      "job_types": [
        "Full-time"
      ],
      "location": "Sheatown, Alabama, Uganda",
      "created_at": "2023-12-08T06:24:37 -06:-30"
    },
    {
      "_id": "65c8af3091cb9df8ab526439",
      "company_name": "VANTAGE",
      "title": "Software Engineer",
      "description": "Lorem sint anim ullamco quis fugiat. Culpa cupidatat reprehenderit eiusmod laboris pariatur quis Lorem deserunt nulla cupidatat aliqua adipisicing voluptate. Cillum sunt duis tempor culpa sit ullamco aliqua tempor ex. Non incididunt velit dolor ipsum sint cillum veniam. Cillum ex excepteur do deserunt consequat tempor culpa deserunt irure ea id sint proident est. Et elit aute exercitation duis consectetur. In sit quis duis consectetur exercitation pariatur magna voluptate enim cupidatat magna occaecat.\r\n",
      "remote": true,
      "url": "http://example.com/job/28",
      "tags": [
        "est",
        "eu",
        "sunt"
      ],
      "job_types": [
        "Freelance"
      ],
      "location": "Canby, Iowa, French Southern Territories",
      "created_at": "2023-01-25T04:08:13 -06:-30"
    },
    {
      "_id": "65c8af302586ba9dbb520830",
      "company_name": "ENJOLA",
      "title": "Project Manager",
      "description": "Aliquip duis enim occaecat elit do irure excepteur sunt aliqua id incididunt sint quis. Eu id laboris dolore sit consectetur reprehenderit amet dolor nulla sint magna anim incididunt. Laborum cillum veniam fugiat dolore.\r\n",
      "remote": false,
      "url": "http://example.com/job/29",
      "tags": [
        "est",
        "aliqua",
        "et"
      ],
      "job_types": [
        "Part-time"
      ],
      "location": "Montura, California, Monaco",
      "created_at": "2023-11-15T05:47:53 -06:-30"
    },
    {
      "_id": "65c8af303058ba34d93f964f",
      "company_name": "ECLIPTO",
      "title": "Data Analyst",
      "description": "Duis est qui aute reprehenderit adipisicing minim mollit. Elit ad voluptate pariatur qui amet anim voluptate fugiat eiusmod cillum tempor. Occaecat magna aliqua dolor et cupidatat ex aliqua dolor ut anim laborum. Adipisicing cillum officia incididunt officia exercitation amet culpa cillum ullamco. Deserunt commodo reprehenderit nisi laboris aliquip laborum. Ullamco in quis non sit est est est nisi in velit est. Proident ex incididunt fugiat eiusmod consequat ex.\r\n",
      "remote": false,
      "url": "http://example.com/job/30",
      "tags": [
        "nulla",
        "eu",
        "eu"
      ],
      "job_types": [
        "Full-time"
      ],
      "location": "Utting, Oregon, Samoa",
      "created_at": "2023-11-26T08:18:25 -06:-30"
    },
    {
      "_id": "65c8af30ad01101ac2ef32b3",
      "company_name": "ESSENSIA",
      "title": "Software Engineer",
      "description": "Mollit officia ad aliqua dolore enim est proident ex. Aliqua consectetur excepteur laboris exercitation sint irure consectetur adipisicing laboris ut irure proident ut dolore. Nulla non et amet exercitation sint. Ex cupidatat elit elit aliqua culpa consequat cupidatat cillum nisi. Consectetur non adipisicing nostrud irure. Laboris aute veniam ex tempor. Sit ut fugiat occaecat et.\r\n",
      "remote": true,
      "url": "http://example.com/job/31",
      "tags": [
        "ex",
        "mollit",
        "nisi"
      ],
      "job_types": [
        "Full-time"
      ],
      "location": "Century, Massachusetts, Mauritius",
      "created_at": "2023-07-23T04:06:56 -06:-30"
    },
    {
      "_id": "65c8af30b8988ef76c430df0",
      "company_name": "PROGENEX",
      "title": "Software Engineer",
      "description": "Aliqua voluptate Lorem qui excepteur ea. Officia amet excepteur Lorem adipisicing elit laborum. Dolor eiusmod consectetur ullamco sunt. Aliquip labore ea Lorem anim elit. Incididunt laborum esse occaecat enim velit.\r\n",
      "remote": false,
      "url": "http://example.com/job/32",
      "tags": [
        "laboris",
        "ea",
        "ad"
      ],
      "job_types": [
        "Part-time"
      ],
      "location": "Cannondale, Kansas, Botswana",
      "created_at": "2023-06-11T02:10:23 -06:-30"
    },
    {
      "_id": "65c8af3018ed6070b3cda04f",
      "company_name": "MAGNEMO",
      "title": "Marketing Manager",
      "description": "Ea sunt proident non eu labore ullamco consectetur labore eu. Cupidatat eiusmod duis aliqua minim. Commodo qui do dolor aliqua duis eu incididunt sit sit veniam nostrud ullamco eu nulla. Lorem irure dolor aliqua consectetur officia minim excepteur laborum nisi incididunt sunt. Ipsum incididunt proident cupidatat laboris magna laboris excepteur deserunt ex adipisicing ut veniam. Dolore proident incididunt et deserunt magna dolor laborum proident ut non. Commodo culpa eiusmod amet incididunt nisi ex dolor.\r\n",
      "remote": false,
      "url": "http://example.com/job/33",
      "tags": [
        "culpa",
        "cupidatat",
        "id"
      ],
      "job_types": [
        "Freelance"
      ],
      "location": "Matthews, Indiana, Mauritania",
      "created_at": "2023-02-15T10:55:16 -06:-30"
    },
    {
      "_id": "65c8af30d3cb1e5c40010a59",
      "company_name": "VELOS",
      "title": "Data Analyst",
      "description": "Voluptate duis tempor cupidatat adipisicing sint velit elit adipisicing velit deserunt labore laborum elit. Tempor sit irure mollit sit cillum ipsum ut enim. Qui reprehenderit voluptate magna do id sit occaecat anim mollit ad aliquip reprehenderit proident veniam. Enim exercitation non mollit nisi irure excepteur amet reprehenderit qui irure ex do eiusmod. Qui aliqua occaecat laboris deserunt non.\r\n",
      "remote": false,
      "url": "http://example.com/job/34",
      "tags": [
        "Lorem",
        "elit",
        "voluptate"
      ],
      "job_types": [
        "Contract"
      ],
      "location": "Coyote, Georgia, Martinique",
      "created_at": "2023-01-24T08:04:30 -06:-30"
    },
    {
      "_id": "65c8af3082875fad58a88b07",
      "company_name": "AEORA",
      "title": "Data Analyst",
      "description": "Eiusmod ullamco proident est consectetur aute dolor duis cillum nulla aliqua adipisicing consectetur deserunt. Consequat mollit quis ea pariatur amet dolore irure mollit et ipsum sint. Culpa non excepteur sunt sint. Pariatur in excepteur cillum ea ipsum laborum ipsum.\r\n",
      "remote": true,
      "url": "http://example.com/job/35",
      "tags": [
        "enim",
        "velit",
        "est"
      ],
      "job_types": [
        "Part-time"
      ],
      "location": "Woodlake, Federated States Of Micronesia, Gabon",
      "created_at": "2023-07-09T06:00:51 -06:-30"
    },
    {
      "_id": "65c8af305ea2b41421a90db7",
      "company_name": "ZILLACON",
      "title": "Software Engineer",
      "description": "Culpa ut incididunt commodo id eiusmod sint ea culpa ut Lorem. Minim aliquip exercitation aliquip eiusmod laborum exercitation enim quis aliqua. Officia officia quis magna eiusmod non id reprehenderit in fugiat nisi velit dolor minim. Magna aliquip velit ut pariatur ea id culpa id qui laborum sint in minim cillum.\r\n",
      "remote": false,
      "url": "http://example.com/job/36",
      "tags": [
        "nulla",
        "et",
        "ex"
      ],
      "job_types": [
        "Full-time"
      ],
      "location": "Snelling, American Samoa, Tajikistan",
      "created_at": "2023-05-26T06:38:56 -06:-30"
    },
    {
      "_id": "65c8af30c514ce26c26a3a27",
      "company_name": "GENEKOM",
      "title": "Data Analyst",
      "description": "Dolor minim qui commodo nostrud officia. Minim aliqua reprehenderit mollit sunt labore exercitation veniam non mollit excepteur. Aute id nisi laboris veniam proident dolore anim laboris ex sit veniam incididunt tempor in. Culpa pariatur aliquip non elit incididunt. Nisi commodo labore in deserunt. Aliqua ipsum excepteur est eiusmod quis id cillum adipisicing eu fugiat deserunt cillum in velit. Sunt adipisicing enim ut consectetur irure enim adipisicing sit ullamco dolore consectetur eu ex.\r\n",
      "remote": false,
      "url": "http://example.com/job/37",
      "tags": [
        "deserunt",
        "exercitation",
        "tempor"
      ],
      "job_types": [
        "Full-time"
      ],
      "location": "Valle, Tennessee, Azerbaijan",
      "created_at": "2023-08-09T09:41:18 -06:-30"
    },
    {
      "_id": "65c8af30c84f8992a1231cd8",
      "company_name": "QUOTEZART",
      "title": "Software Engineer",
      "description": "Irure velit in Lorem culpa mollit laborum excepteur laborum non cupidatat aute. Consectetur voluptate minim ex aute ad mollit voluptate dolor. Ipsum ex duis veniam ut cupidatat ea. Cillum labore nisi tempor voluptate est duis. Laborum pariatur voluptate reprehenderit exercitation adipisicing et labore Lorem ad. Qui quis labore eiusmod enim non adipisicing non exercitation cillum. Proident ut ipsum aliquip do ullamco labore proident magna labore.\r\n",
      "remote": true,
      "url": "http://example.com/job/38",
      "tags": [
        "laborum",
        "laborum",
        "incididunt"
      ],
      "job_types": [
        "Part-time"
      ],
      "location": "Baker, Vermont, Syria",
      "created_at": "2023-07-01T09:01:52 -06:-30"
    },
    {
      "_id": "65c8af30f0fae2d4bc435102",
      "company_name": "ACCUPHARM",
      "title": "Sales Representative",
      "description": "Proident qui sint in deserunt excepteur dolore amet est laboris aliquip sunt ipsum do. Consequat incididunt cupidatat sint pariatur aute qui aute. Est reprehenderit ex pariatur non.\r\n",
      "remote": false,
      "url": "http://example.com/job/39",
      "tags": [
        "sit",
        "laborum",
        "exercitation"
      ],
      "job_types": [
        "Freelance"
      ],
      "location": "Stewartville, New York, Cambodia",
      "created_at": "2023-04-15T07:57:03 -06:-30"
    },
    {
      "_id": "65c8af30e9be72db873eb074",
      "company_name": "MULTRON",
      "title": "Sales Representative",
      "description": "Labore laborum commodo occaecat elit amet nisi laboris elit. Aliqua mollit reprehenderit ea elit. Cupidatat anim ea irure ullamco irure qui laborum minim fugiat eu aliquip pariatur. Laboris mollit tempor adipisicing anim dolore officia proident tempor laborum anim.\r\n",
      "remote": true,
      "url": "http://example.com/job/40",
      "tags": [
        "nisi",
        "deserunt",
        "tempor"
      ],
      "job_types": [
        "Freelance"
      ],
      "location": "Fairview, Minnesota, Malawi",
      "created_at": "2023-07-29T03:32:24 -06:-30"
    },
    {
      "_id": "65c8af30440314afd4b6fe8d",
      "company_name": "DIGIQUE",
      "title": "Data Analyst",
      "description": "Nisi nostrud consequat consectetur consequat ut minim. Irure nisi voluptate occaecat ipsum id anim proident ex. Incididunt esse veniam laborum ipsum dolor commodo in excepteur. Ex adipisicing ea in duis commodo consectetur est velit. Anim esse eiusmod qui cupidatat consectetur cupidatat excepteur ipsum incididunt veniam anim minim mollit. Ullamco mollit qui qui eiusmod. Pariatur anim incididunt reprehenderit est non fugiat quis.\r\n",
      "remote": true,
      "url": "http://example.com/job/41",
      "tags": [
        "proident",
        "enim",
        "elit"
      ],
      "job_types": [
        "Freelance"
      ],
      "location": "Bloomington, Puerto Rico, Iceland",
      "created_at": "2023-02-01T04:28:10 -06:-30"
    },
    {
      "_id": "65c8af3070f47911518c1387",
      "company_name": "MUSANPOLY",
      "title": "Data Analyst",
      "description": "Irure reprehenderit amet minim nulla aute magna cupidatat exercitation. Enim et eiusmod pariatur voluptate duis excepteur ad fugiat commodo quis nostrud do esse. Reprehenderit nisi consectetur aliquip cillum nostrud cupidatat qui non. Laboris aliquip labore est laborum id cillum est consectetur sint. Veniam velit amet in dolore voluptate officia consectetur. Eu et id labore anim ut laboris laborum aliqua. Et esse irure duis qui sint voluptate elit ea anim ea irure.\r\n",
      "remote": true,
      "url": "http://example.com/job/42",
      "tags": [
        "sint",
        "excepteur",
        "cillum"
      ],
      "job_types": [
        "Part-time"
      ],
      "location": "Lowgap, Louisiana, Qatar",
      "created_at": "2023-05-21T10:18:15 -06:-30"
    },
    {
      "_id": "65c8af307fe1967e4b42cdfe",
      "company_name": "DEEPENDS",
      "title": "Software Engineer",
      "description": "Occaecat esse elit irure incididunt minim commodo Lorem in dolore occaecat consectetur mollit dolor. Eu pariatur labore amet tempor. Excepteur non nulla duis exercitation. Eiusmod dolor ex minim Lorem duis ut enim labore. Ullamco proident id est eu sunt mollit amet enim nisi elit nulla fugiat. Ex ullamco aliqua eiusmod id culpa velit aliquip fugiat fugiat veniam nulla dolor. Laborum ut adipisicing laboris sunt et dolor.\r\n",
      "remote": true,
      "url": "http://example.com/job/43",
      "tags": [
        "minim",
        "dolore",
        "fugiat"
      ],
      "job_types": [
        "Freelance"
      ],
      "location": "Blende, Utah, Lithuania",
      "created_at": "2023-08-14T10:08:17 -06:-30"
    },
    {
      "_id": "65c8af305d21c7c304517661",
      "company_name": "TELEPARK",
      "title": "Data Analyst",
      "description": "Veniam nulla consectetur ut adipisicing anim velit officia tempor culpa. Duis nisi culpa ea duis tempor nulla cupidatat magna Lorem amet aute. Qui id dolore id nostrud veniam dolore. Irure ex exercitation dolore in.\r\n",
      "remote": false,
      "url": "http://example.com/job/44",
      "tags": [
        "consequat",
        "dolor",
        "dolor"
      ],
      "job_types": [
        "Full-time"
      ],
      "location": "Swartzville, Connecticut, Brunei Darussalam",
      "created_at": "2023-10-18T06:30:43 -06:-30"
    },
    {
      "_id": "65c8af307bbb196241ff353f",
      "company_name": "PERKLE",
      "title": "Marketing Manager",
      "description": "Consequat culpa ipsum anim sunt officia id voluptate anim eiusmod est occaecat sunt nisi occaecat. Est nisi incididunt nostrud cillum id. Duis duis aute exercitation est ea exercitation officia aute. Voluptate nulla ea consectetur elit reprehenderit et irure quis tempor nisi fugiat Lorem enim.\r\n",
      "remote": false,
      "url": "http://example.com/job/45",
      "tags": [
        "nulla",
        "amet",
        "laborum"
      ],
      "job_types": [
        "Part-time"
      ],
      "location": "Boling, Virginia, Poland",
      "created_at": "2023-09-06T10:30:17 -06:-30"
    },
    {
      "_id": "65c8af30b655563c19adad1e",
      "company_name": "ZOLAREX",
      "title": "Software Engineer",
      "description": "Et ex velit ut veniam elit excepteur dolor ex aliquip do tempor laborum. Anim duis ex ad ad enim eu irure. Magna sit dolore non aliquip aliquip sint pariatur eu qui adipisicing. Laboris Lorem consectetur proident anim occaecat sint irure exercitation incididunt ea dolore dolor. Veniam do cupidatat duis cupidatat qui voluptate aliqua reprehenderit ad enim pariatur deserunt. Ipsum et veniam eiusmod exercitation do commodo fugiat do ad.\r\n",
      "remote": false,
      "url": "http://example.com/job/46",
      "tags": [
        "quis",
        "aliquip",
        "ipsum"
      ],
      "job_types": [
        "Part-time"
      ],
      "location": "Columbus, Oklahoma, Ethiopia",
      "created_at": "2024-01-24T06:01:26 -06:-30"
    },
    {
      "_id": "65c8af30fff9417abd62c68d",
      "company_name": "EVENTAGE",
      "title": "Data Analyst",
      "description": "Consequat qui anim amet est quis eu laborum reprehenderit ut amet velit id nisi in. Ad sint exercitation reprehenderit laboris irure duis nulla nulla. Sit aliqua enim in ex.\r\n",
      "remote": true,
      "url": "http://example.com/job/47",
      "tags": [
        "deserunt",
        "quis",
        "reprehenderit"
      ],
      "job_types": [
        "Freelance"
      ],
      "location": "Cornfields, Florida, Niue",
      "created_at": "2023-12-28T03:27:31 -06:-30"
    },
    {
      "_id": "65c8af305a5d10919663fdee",
      "company_name": "ACRUEX",
      "title": "Software Engineer",
      "description": "Commodo sunt minim consequat esse ipsum exercitation duis Lorem laborum ex laborum eiusmod cillum exercitation. Voluptate dolore aliqua do minim qui sunt enim quis id duis. Qui deserunt officia est pariatur magna tempor deserunt enim. Nulla aliquip eu esse ullamco nostrud dolor non occaecat duis ad occaecat. In velit duis aliquip proident dolore cupidatat pariatur sint. Non amet ad laboris occaecat id eiusmod non. Dolor qui amet deserunt culpa dolor nulla pariatur.\r\n",
      "remote": false,
      "url": "http://example.com/job/48",
      "tags": [
        "quis",
        "laborum",
        "tempor"
      ],
      "job_types": [
        "Part-time"
      ],
      "location": "Bowmansville, Delaware, Kiribati",
      "created_at": "2024-01-12T11:34:17 -06:-30"
    },
    {
      "_id": "65c8af300f8583fbaf149c61",
      "company_name": "BUZZOPIA",
      "title": "Marketing Manager",
      "description": "Irure velit officia nostrud pariatur nostrud quis do adipisicing. Proident non minim quis laboris duis enim. Sint commodo ipsum aliquip qui. Quis et laborum cillum proident anim cillum excepteur aliqua duis. In est deserunt ut cillum irure adipisicing proident ea occaecat exercitation ullamco id nulla consequat. Culpa culpa eiusmod dolore elit.\r\n",
      "remote": false,
      "url": "http://example.com/job/49",
      "tags": [
        "ullamco",
        "qui",
        "ex"
      ],
      "job_types": [
        "Freelance"
      ],
      "location": "Wildwood, Ohio, Aruba",
      "created_at": "2023-08-06T07:32:29 -06:-30"
    },
    {
      "_id": "65c8af30d7664415ae530019",
      "company_name": "ORBAXTER",
      "title": "Marketing Manager",
      "description": "Esse nulla sunt magna eiusmod est. Est exercitation nulla ullamco veniam occaecat velit ut excepteur consectetur. Ipsum nisi labore ut minim. Dolor do sunt sunt nostrud nisi culpa.\r\n",
      "remote": true,
      "url": "http://example.com/job/50",
      "tags": [
        "occaecat",
        "veniam",
        "ut"
      ],
      "job_types": [
        "Contract"
      ],
      "location": "Lydia, Maryland, Vatican City State (Holy See)",
      "created_at": "2023-08-08T10:54:59 -06:-30"
    },
    {
      "_id": "65c8af30a12667a902c91561",
      "company_name": "RODEMCO",
      "title": "Software Engineer",
      "description": "Proident veniam et sunt cupidatat veniam in magna. Dolore occaecat aliquip ut in sit exercitation sunt esse. Elit Lorem magna veniam non non Lorem qui ad amet consectetur tempor sunt ut. Id anim nisi quis commodo id. Enim aliqua fugiat laboris nisi ex occaecat fugiat duis fugiat ut deserunt deserunt. Quis ex et cupidatat consequat laborum ullamco culpa reprehenderit sit eiusmod sint.\r\n",
      "remote": true,
      "url": "http://example.com/job/51",
      "tags": [
        "nostrud",
        "id",
        "ad"
      ],
      "job_types": [
        "Freelance"
      ],
      "location": "Berlin, Colorado, Kuwait",
      "created_at": "2023-05-17T01:56:10 -06:-30"
    },
    {
      "_id": "65c8af30e098362919156294",
      "company_name": "LOCAZONE",
      "title": "Software Engineer",
      "description": "Nulla enim ipsum nisi anim proident dolore magna amet pariatur. Tempor cillum tempor qui id elit fugiat laboris id deserunt excepteur. Enim anim excepteur mollit reprehenderit aliqua duis velit.\r\n",
      "remote": false,
      "url": "http://example.com/job/52",
      "tags": [
        "proident",
        "qui",
        "labore"
      ],
      "job_types": [
        "Freelance"
      ],
      "location": "Harrison, Arizona, Guinea",
      "created_at": "2024-02-04T02:25:04 -06:-30"
    },
    {
      "_id": "65c8af3077370eca162fa194",
      "company_name": "SLOGANAUT",
      "title": "Sales Representative",
      "description": "Labore do enim ut ea minim. Qui velit magna cupidatat qui veniam. Voluptate cupidatat dolore tempor esse consectetur veniam sit. Et quis ipsum commodo eu tempor minim occaecat ex dolor dolor cillum sint proident excepteur. Sunt mollit cillum ut velit laboris deserunt labore minim dolor non aliquip sit. Veniam officia ex et minim eiusmod deserunt ut occaecat esse consequat culpa.\r\n",
      "remote": false,
      "url": "http://example.com/job/53",
      "tags": [
        "occaecat",
        "non",
        "anim"
      ],
      "job_types": [
        "Freelance"
      ],
      "location": "Interlochen, South Carolina, Albania",
      "created_at": "2023-12-24T02:31:18 -06:-30"
    },
    {
      "_id": "65c8af3058b2519ab2416a78",
      "company_name": "INRT",
      "title": "Software Engineer",
      "description": "Est cupidatat dolor deserunt occaecat magna sint velit voluptate commodo pariatur dolor. Incididunt voluptate qui deserunt eu ipsum exercitation minim consequat dolore et. Est dolor duis adipisicing id dolore cupidatat dolor consequat officia proident in deserunt proident culpa. Aliquip et adipisicing aliquip nostrud ut ad magna in laboris dolor dolor dolor labore.\r\n",
      "remote": false,
      "url": "http://example.com/job/54",
      "tags": [
        "quis",
        "ullamco",
        "duis"
      ],
      "job_types": [
        "Contract"
      ],
      "location": "Virgie, Nevada, Fiji",
      "created_at": "2024-01-03T11:03:46 -06:-30"
    },
    {
      "_id": "65c8af302a67ad02f859de52",
      "company_name": "DANJA",
      "title": "Data Analyst",
      "description": "Do sit cupidatat pariatur commodo nisi consectetur. Est reprehenderit consequat do sit anim enim aliquip aliquip et amet ad quis consectetur mollit. Anim veniam ullamco consectetur ut exercitation ullamco consequat est nulla veniam excepteur aute dolore.\r\n",
      "remote": false,
      "url": "http://example.com/job/55",
      "tags": [
        "sunt",
        "dolor",
        "ut"
      ],
      "job_types": [
        "Part-time"
      ],
      "location": "Logan, Michigan, Guam",
      "created_at": "2023-01-19T02:56:43 -06:-30"
    }
  ]  
  return (
    <div>
      <Jobs jobs={jobs} />
    </div>
  );
};

export default page;
