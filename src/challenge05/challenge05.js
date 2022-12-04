const mecenas = [
    "Gorusuke",
    "DavidFabian",
    "ItziarZG",
    "edy WOLF",
    "MarcosGaPe",
    "Jose Jimenez",
    "Borja ",
    "Jhonathan Izquierdo Higuita",
    "MiLfeR322",
    "Sebastián Espínola",
    "Matias Luna",
    "Imanol Decima",
    "MarcoCasula",
    "MaríaBohórquez",
    "Renan",
    "IvanL'olivier",
    "Shonero",
    "Luichidev",
    "Faviola Narvaez",
    "Christopher Fuentes",
    "Kuro",
    "Juan Pablo Addeo",
    "Sergio Martínez",
    "Fran Enriquez González",
    "Diana",
    "tictools",
    "ConchaAsensio",
    "Emilio_Arreaza",
    "novamix",
    "Tomas Duclos",
    "Elaya",
    "Ignacio Palominos",
    "David C.",
    "Gerardo Felipe Conrado",
    "ElXuri",
    "David Borja Martinez",
    "JaviFelices",
    "CarlesSànchez",
    "Gorusuke",
    "DavidFabian",
    "ItziarZG",
    "edy WOLF",
    "MarcosGaPe",
    "Jose Jimenez",
    "Borja ",
    "Jhonathan Izquierdo Higuita",
    "MiLfeR322",
    "Sebastián Espínola",
    "Matias Luna",
    "Imanol Decima",
    "MarcoCasula",
    "MaríaBohórquez",
    "Renan",
    "IvanL'olivier",
    "Shonero",
    "Luichidev",
    "Faviola Narvaez",
    "Christopher Fuentes",
    "Kuro",
    "Juan Pablo Addeo",
    "Sergio Martínez",
    "Fran Enriquez González",
    "Diana",
    "tictools",
    "ConchaAsensio",
    "Emilio_Arreaza",
    "novamix",
    "Tomas Duclos",
    "Elaya",
    "Ignacio Palominos",
    "David C.",
    "Gerardo Felipe Conrado",
    "ElXuri",
    "David Borja Martinez",
    "JaviFelices",
    "CarlesSànchez",
    "Gorusuke",
    "DavidFabian",
    "ItziarZG",
    "edy WOLF",
    "MarcosGaPe",
    "Jose Jimenez",
    "Borja ",
    "Jhonathan Izquierdo Higuita",
    "MiLfeR322",
    "Sebastián Espínola",
    "Matias Luna",
    "Imanol Decima",
    "MarcoCasula",
    "MaríaBohórquez",
    "Renan",
    "IvanL'olivier",
    "Shonero",
    "Luichidev",
    "Faviola Narvaez",
    "Christopher Fuentes",
    "Kuro",
    "Juan Pablo Addeo",
    "Sergio Martínez",
    "Fran Enriquez González",
    "Diana",
    "tictools",
    "ConchaAsensio",
    "Emilio_Arreaza",
    "novamix",
    "Tomas Duclos",
    "Elaya",
    "Ignacio Palominos",
    "David C.",
    "Gerardo Felipe Conrado",
    "ElXuri",
    "David Borja Martinez",
    "JaviFelices",
    "CarlesSànchez"
  ]
  
  const shouldWeKillZeroIndex = (mecenas) => {
    const isEven = mecenas.length % 2
    return !isEven
  }
  
  const getSurvival = (mecenas) => {
    const kill = false;
    const save = !kill;
    let survivalIndex = 0
    let killNextIndex = survivalIndex + 1;
    const survivals = mecenas.filter((_, index) => {
      if(index === 0) return shouldWeKillZeroIndex(mecenas)
      if(index === killNextIndex){
        survivalIndex = killNextIndex + 1
        killNextIndex = survivalIndex + 1
        return kill
      }
      return save
    })
    const thereAreStillSurvivals = survivals.length > 1
    if(thereAreStillSurvivals) return getSurvival(survivals)
    const survival = survivals[0]
    return survival
  }
  
  console.log(getSurvival(mecenas))