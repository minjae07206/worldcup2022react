const countryData = [
    {
    name: 'Qatar',
    group: 'A',
    image: 'qatar.png',
    appearances: '1',
    bestPerformance: 'Qualifiers',
    lastPerformance: 'Qualifiers',
    keyPlayer: 'Almoez Ali (Al-Duhail SC)',
    otherPlayers: ['Boualem Khoukhi (Al Saad SC)', 'Akram Afif (Al Saad SC)', 'Hasan Al-Haydos (Al Saad SC)'],
    continent: 'asia',
    seed: '1',
    current: ""
  }, {
    name: 'Ecuador',
    group: 'A',
    image: 'ecuador.png',
    appearances: '4',
    bestPerformance: 'Round of 16',
    lastPerformance: 'Qualifiers',
    keyPlayer: 'Pervis Estupiñán (Brighton & Hove Albion F.C.)',
    otherPlayers: ['Moisés Caicedo (Brighton & Hove Albion F.C.)', 'Enner Valencia (Fenerbahçe S.K.)', 'Piero Hincapié (Bayer 04 Leverkusen)'],
    continent: 'southamerica',
    seed: '4',
    current: ""
  }, {
    name: 'Senegal',
    group: 'A',
    image: 'senegal.png',
    appearances: '3',
    bestPerformance: 'Quarter-finals',
    lastPerformance: 'Group stage',
    keyPlayer: 'Sadio Mané (FC Bayern Munich)',
    otherPlayers: ['Kalidou Koulibaly (Chelsea F.C.)', 'Édouard Mendy (Chelsea F.C.)', 'Pape Abou Cissé (Olympiacos F.C.)'],
    continent: 'africa',
    seed: '3',
    current: ""
  }, {
    name: 'Netherlands',
    group: 'A',
    image: 'netherlands.png',
    appearances: '11',
    bestPerformance: 'Runners-up(3)',
    lastPerformance: 'Qualifiers',
    keyPlayer: 'Virgil van Dijk (Liverpool F.C.)',
    otherPlayers: ['Matthijs de Ligt (FC Bayern Munich)', 'Steven Bergwijn (AFC Ajax)', 'Frenkie de Jong (FC Barcelona)'],
    continent: 'europe',
    seed: '2',
    current: ""
  }, 
    {
    name: 'England',
    group: 'B',
    image: 'england.png',
    appearances: '16',
    bestPerformance: 'Winners(1)',
    lastPerformance: 'Fourth',
    keyPlayer: 'Phil Foden (Manchester City F.C.)',
    otherPlayers: ['Harry Kane (Tottenham Hotspur F.C.)', 'Reece James (Chelsea F.C.)', 'Jack Grealish (Manchester City F.C.)'],
    continent: 'europe',
    seed: '1',
    current: ""
  }, {
    name: 'Iran',
    group: 'B',
    image: 'iran.png',
    appearances: '6',
    bestPerformance: 'Group stage',
    lastPerformance: 'Group stage',
    keyPlayer: 'Mehdi Taremi (FC Porto)',
    otherPlayers: ['Alireza Jahanbakhsh (Feyenoord)', 'Sardar Azmoun (Bayer 04 Leverkusen)', 'Ali Gholizadeh (R. Charleroi S.C.)'],
    continent: 'asia',
    seed: '3',
    current: ""
  }, {
    name: 'USA',
    group: 'B',
    image: 'usa.png',
    appearances: '11',
    bestPerformance: 'Third',
    lastPerformance: 'Qualifiers',
    keyPlayer: 'Christian Pulisic (Chelsea F.C.)',
    otherPlayers: ['Brenden Aaronson (Leeds United)', 'Weston McKennie (Juventus F.C.)', 'Tyler Adams (Leeds United)'],
    continent: 'northamerica',
    seed: '2',
    current: ""
  },{
    name: 'Wales',
    group: 'B',
    image: 'wales.png',
    appearances: '2',
    bestPerformance: 'Quarter-finals',
    lastPerformance: 'Qualifiers',
    keyPlayer: 'Brennan Johnson (Nottingham Forest F.C.)',
    otherPlayers: ['Daniel James (Fulham F.C.)', 'Gareth Bale (Los Angeles FC)', 'Neco Williams (Nottingham Forest F.C.)'],
    continent: 'europe',
    seed: '4',
    current: ""
  }, {
    name: 'Argentina',
    group: 'C',
    image: 'argentina.png',
    appearances: '18',
    bestPerformance: 'Winners(2)',
    lastPerformance: 'Round of 16',
    keyPlayer: 'Lionel Messi (Paris Saint-Germain F.C.)',
    otherPlayers: ['Lautaro Martínez (Inter Milan)', 'Cristian Romero (Tottenham Hotspur F.C.)', 'Rodrigo De Paul (Atlético de Madrid)'],
    continent: 'southamerica',
    seed: '1',
    current: ""
  }, {
    name: 'Saudi Arabia',
    group: 'C',
    image: 'saudiarabia.png',
    appearances: '6',
    bestPerformance: 'Round of 16',
    lastPerformance: 'Group stage',
    keyPlayer: 'Salem Al-Dawsari (Al Hilal SFC)',
    otherPlayers: ['Sultan Al-Ghanam (Al-Nassr FC)', 'Firas Al-Buraikan (Al Fateh SC)', 'Hattan Bahebri (Al Hilal SFC)'],
    continent: 'asia',
    seed: '4',
    current: ""
  }, {
    name: 'Mexico',
    group: 'C',
    image: 'mexico.png',
    appearances: '17',
    bestPerformance: 'Quarter-finals',
    lastPerformance: 'Round of 16',
    keyPlayer: 'Hirving Lozano (S.S.C. Napoli)',
    otherPlayers: ['Raúl Jiménez (Wolverhampton Wanderers F.C.)', 'Edson Álvarez (AFC Ajax)', 'Andrés Guardado (Real Betis)'],
    continent: 'northamerica',
    seed: '2',
    current: ""
  }, {
    name: 'Poland',
    group: 'C',
    image: 'poland.png',
    appearances: '9',
    bestPerformance: 'Third',
    lastPerformance: 'Group stage',
    keyPlayer: 'Robert Lewandowski (FC Barcelona)',
    otherPlayers: ['Piotr Zieliński (S.S.C. Napoli)', 'Jan Bednarek (Aston Villa F.C.)', 'Wojciech Szczęsny (Juventus F.C.)'],
    continent: 'europe',
    seed: '3',
    current: ""
  }, {
    name: 'France',
    group: 'D',
    image: 'france.png',
    appearances: '16',
    bestPerformance: 'Winners(2)',
    lastPerformance: 'Winners',
    keyPlayer: 'Kylian Mbappé (Paris Saint-Germain F.C.)',
    otherPlayers: ['Antoine Griezmann (Atlético Madrid)', 'Ferland Mendy (Real Madrid CF)', 'Benjamin Pavard (FC Bayern Munich)'],
    continent: 'europe',
    seed: '1',
    current: ""
  }, {
    name: 'Australia',
    group: 'D',
    image: 'australia.png',
    appearances: '6',
    bestPerformance: 'Round of 16',
    lastPerformance: 'Group stage',
    keyPlayer: 'Aaron Mooy (Celtic F.C.)',
    otherPlayers: ['Mathew Ryan (F.C. Copenhagen)', 'Martin Boyle (Hibernian F.C.)', 'Ajdin Hrustic (Hellas Verona F.C.)'],
    continent: 'asia',
    seed: '4',
    current: ""
  }, {
    name: 'Denmark',
    group: 'D',
    image: 'denmark.png',
    appearances: '6',
    bestPerformance: 'Quarter-finals',
    lastPerformance: 'Round of 16',
    keyPlayer: 'Christian Eriksen (Manchester United F.C.)',
    otherPlayers: ['Pierre-Emile Højbjerg (Tottenham Hotspur F.C.)', 'Andreas Christensen (FC Barcelona)', 'Joachim Andersen (Crystal Palace F.C.)'],
    continent: 'europe',
    seed: '2',
    current: ""
  }, {
    name: 'Tunisia',
    group: 'D',
    image: 'tunisia.png',
    appearances: '6',
    bestPerformance: 'Group stage',
    lastPerformance: 'Group stage',
    keyPlayer: 'Ellyes Skhiri (FC Köln)',
    otherPlayers: ['Youssef Msakni (Al-Arabi SC)', 'Anis Ben Slimane (Brøndby IF)', 'Montassar Talbi (FC Lorient)'],
    continent: 'africa',
    seed: '3',
    current: ""
  }, {
    name: 'Spain',
    group: 'E',
    image: 'spain.png',
    appearances: '16',
    bestPerformance: 'Winners(1)',
    lastPerformance: 'Round of 16',
    keyPlayer: 'Pedri (FC Barcelona)',
    otherPlayers: ['Sergio Busquets (FC Barcelona)', 'Ferran Torres (FC Barcelona)', 'Álvaro Morata (Atlético Madrid)'],
    continent: 'europe',
    seed: '1',
    current: ""
  }, {
    name: 'Costa Rica',
    group: 'E',
    image: 'costarica.png',
    appearances: '6',
    bestPerformance: 'Quarter-finals',
    lastPerformance: 'Group stage',
    keyPlayer: 'Keylor Navas (Paris Saint-Germain F.C.)',
    otherPlayers: ['Jewison Bennette (Sunderland A.F.C.)', 'Anthony Contreras (C.S. Herediano)', 'Joel Campbell (Club León)'],
    continent: 'northamerica',
    seed: '4',
    current: ""
  }, {
    name: 'Germany',
    group: 'E',
    image: 'germany.png',
    appearances: '20',
    bestPerformance: 'Winners(4)',
    lastPerformance: 'Group stage',
    keyPlayer: 'Kai Havertz (Chelsea F.C.)',
    otherPlayers: ['Joshua Kimmich (FC Bayern Munich)', 'İlkay Gündoğan (Manchester City F.C.)', 'Thomas Müller (FC Bayern Munich)'],
    continent: 'europe',
    seed: '2',
    current: ""
  }, {
    name: 'Japan',
    group: 'E',
    image: 'japan.png',
    appearances: '7',
    bestPerformance: 'Round of 16',
    lastPerformance: 'Round of 16',
    keyPlayer: 'Takehiro Tomiyasu (Arsenal F.C.)',
    otherPlayers: ['Takefusa Kubo (Real Sociedad)', 'Takumi Minamino (AS Monaco FC)', 'Daichi Kamada (Eintracht Frankfurt)'],
    continent: 'asia',
    seed: '3',
    current: ""
  }, {
    name: 'Belgium',
    group: 'F',
    image: 'belgium.png',
    appearances: '14',
    bestPerformance: 'Third',
    lastPerformance: 'Third',
    keyPlayer: 'Kevin De Bruyne (Manchester City F.C.)',
    otherPlayers: ['Thibaut Courtois (Real Madrid CF)', 'Eden Hazard (Real Madrid CF)', 'Axel Witsel (Atlético Madrid)'],
    continent: 'europe',
    seed: '1',
    current: ""
  }, {
    name: 'Canada', 
    group: 'F',
    image: 'canada.png',
    appearances: '2',
    bestPerformance: 'Group stage',
    lastPerformance: 'Qualifiers',
    keyPlayer: 'Alphonso Davies (FC Bayern Munich)',
    otherPlayers: ['Jonathan David (Lille OSC)', 'Stephen Eustáquio (FC Porto)', 'Cyle Larin (Club Brugge KV)'],
    continent: 'northamerica',
    seed: '4',
    current: ""
  }, {
    name: 'Morocco',
    group: 'F',
    image: 'morocco.png',
    appearances: '6',
    bestPerformance: 'Round of 16',
    lastPerformance: 'Group stage',
    keyPlayer: 'Achraf Hakimi (Paris Saint-Germain F.C.)',
    otherPlayers: ['Hakim Ziyech (Chelsea F.C.)', 'Noussair Mazraoui (FC Bayern Munich)', 'Yassine Bounou (Sevilla FC)'],
    continent: 'africa',
    seed: '3',
    current: ""
  }, {
    name: 'Croatia',
    group: 'F',
    image: 'croatia.png',
    appearances: '6',
    bestPerformance: 'Runners-up',
    lastPerformance: 'Runners-up',
    keyPlayer: 'Luka Modrić (Real Madrid CF)',
    otherPlayers: ['Mateo Kovačić (Chelsea F.C.)', 'Marcelo Brozović (Inter Milan)', 'Ivan Perišić (Tottenham Hotspur F.C.)'],
    continent: 'europe',
    seed: '2',
    current: ""
  }, {
    name: 'Brazil',
    group: 'G',
    image: 'brazil.png',
    appearances: '22',
    bestPerformance: 'Winners(5)',
    lastPerformance: 'Quarter-finals',
    keyPlayer: 'Neymar (Paris Saint-Germain F.C.)',
    otherPlayers: ['Vinícius Júnior (Real Madrid CF)', 'Casemiro (Manchester United F.C.)', 'Marquinhos (Paris Saint-Germain F.C.)'],
    continent: 'southamerica',
    seed: '1',
    current: ""
  }, {
    name: 'Serbia',
    group: 'G',
    image: 'serbia.png',
    appearances: '3',
    bestPerformance: 'Group stage',
    lastPerformance: 'Group stage',
    keyPlayer: 'Aleksandar Mitrović (Fulham F.C.)',
    otherPlayers: ['Dušan Tadić (AFC Ajax)', 'Sergej Milinković-Savić (S.S. Lazio)', 'Dušan Vlahović (Juventus F.C.)'],
    continent: 'europe',
    seed: '3',
    current: ""
  }, {
    name: 'Switzerland',
    group: 'G',
    image: 'switzerland.png',
    appearances: '12',
    bestPerformance: 'Quarter-finals',
    lastPerformance: 'Round of 16',
    keyPlayer: 'Granit Xhaka (Arsenal F.C.)',
    otherPlayers: ['Breel Embolo (AS Monaco FC)', 'Djibril Sow (Eintracht Frankfurt)', 'Remo Freuler (Nottingham Forest F.C.)'],
    continent: 'europe',
    seed: '2',
    current: ""
  }, {
    name: 'Cameroon',
    group: 'G',
    image: 'cameroon.png',
    appearances: '8',
    bestPerformance: 'Quarter-finals',
    lastPerformance: 'Qualifiers',
    keyPlayer: 'Karl Toko Ekambi (Olympique Lyonnais)',
    otherPlayers: ['Vincent Aboubakar (Al Nassr FC)', 'André Onana (Inter Milan)', 'Bryan Mbeumo (Brentford F.C.)'],
    continent: 'africa',
    seed: '4',
    current: ""
  }, {
    name: 'Portugal',
    group: 'H',
    image: 'portugal.png',
    appearances: '8',
    bestPerformance: 'Third',
    lastPerformance: 'Round of 16',
    keyPlayer: 'Bruno Fernandes (Manchester United F.C.)',
    otherPlayers: ['João Cancelo (Manchester City F.C.)', 'Bernardo Silva (Manchester City F.C.)', 'Rúben Dias (Manchester City F.C.)'],
    continent: 'europe',
    seed: '1',
    current: ""
  }, {
    name: 'Ghana',
    group: 'H',
    image: 'ghana.png',
    appearances: '4',
    bestPerformance: 'Quarter-finals',
    lastPerformance: 'Qualifiers',
    keyPlayer: 'Mohammed Kudus (AFC Ajax)',
    otherPlayers: ['André Ayew (Al Sadd SC)', 'Iñaki Williams (Athletic Bilbao)', 'Daniel Amartey (Leicester City F.C.)'],
    continent: 'africa',
    seed: '4',
    current: ""
  }, {
    name: 'Uruguay',
    group: 'H',
    image: 'uruguay.png',
    appearances: '14',
    bestPerformance: 'Winners(2)',
    lastPerformance: 'Quarter-finals',
    keyPlayer: 'Federico Valverde (Real Madrid CF)',
    otherPlayers: ['Luis Suárez (Club Nacional de Football)', 'Darwin Núñez (Liverpool F.C.)', 'Rodrigo Bentancur (Tottenham Hotspur F.C.)'],
    continent: 'southamerica',
    seed: '2',
    current: ""
  }, {
    name: 'Korea Republic',
    group: 'H',
    image: 'korearepublic.png',
    appearances: '11',
    bestPerformance: 'Fourth',
    lastPerformance: 'Group stage',
    keyPlayer: 'Son Heung-min (Tottenham Hotspur F.C.)',
    otherPlayers: ['Kim Min-jae (S.S.C. Napoli)', 'Hwang Hee-chan (Wolverhampton Wanderers F.C.)', 'Hwang In-beom (Olympiacos F.C.)'],
    continent: 'asia',
    seed: '3',
    current: ""
  }]

  export default countryData;