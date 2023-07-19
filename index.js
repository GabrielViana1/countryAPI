const icons = document.querySelectorAll('.countryContinent .countryContinentOptions ol li')
const inputSearch = document.getElementById('searchCountry')
const countryFlags = document.getElementById('countryFlags')
const div = document.querySelectorAll('.countryCard')
const countryQuantity = document.getElementById('countryQuantity')
let countryQuantityNumber = 0

function resetCards () {
    icons.forEach(icon =>  icon.addEventListener('click', async () => {
        const div = document.querySelectorAll('.countryCard')
        switch(icon.id) {
            case 'allFlags':
                div.forEach(function(div){
                    countryFlags.removeChild(div)
                })
                getCountries('allFlags')
            break

            case 'africa':
                div.forEach(function(div){ 
                    countryFlags.removeChild(div)
                })
                getCountries('africa')
            break

            case 'america':
                div.forEach(function(div){ 
                    countryFlags.removeChild(div)
                })
                getCountries('america')
            break

            case 'antartica':
                div.forEach(function(div){ 
                    countryFlags.removeChild(div)
                })
                getCountries('antartica')
            break

            case 'asia':
                div.forEach(function(div){ 
                    countryFlags.removeChild(div)
                })
                getCountries('asia')
            break

            case 'europa':
                div.forEach(function(div){ 
                    countryFlags.removeChild(div)
                })
                getCountries('europa')
            break

            case 'oceania':
                div.forEach(function(div){ 
                    countryFlags.removeChild(div)
                })
                getCountries('oceania')
            break
        }
    }))
}

//Mudar ICON do aside de opções (Continentes)
function changeIcon () {
    console.log(icons)
    icons.forEach(icon => icon.addEventListener('mouseenter', function() {
        const img = document.getElementById(`${icon.id}Img`)
        img.src = '/images/setas-flechas-color.png'
    }))

    icons.forEach(icon => icon.addEventListener('mouseleave', function() {
        if(icon.className != 'active') {
            const img = document.getElementById(`${icon.id}Img`)
            img.src = '/images/setas-flechas.png'
        }
    }))
}

//Adiciona icon colorido no MENU selecionado
icons.forEach(icon => icon.addEventListener('click', () => {
    resetStyleContinents()
    icon.classList.add('active')
    const img = document.getElementById(`${icon.id}Img`)
    img.src = '/images/setas-flechas-color.png'
    countryQuantityNumber = 0
}))

//Remove todos os icons coloridos dos menus
async function resetStyleContinents() {
    icons.forEach(function(icon) {
        icon.classList.remove('active')
        const img = document.getElementById(`${icon.id}Img`)
        img.src = '/images/setas-flechas.png'
    })
}

//Function para pegar informações das apis
async function getCountries(continent) {
    const response = await fetch("https://restcountries.com/v3.1/all")
    const countries = await response.json()
    console.log(countries)
    //Switch para saber qual continente foi selecionado
    switch(continent) {
        case 'allFlags':
            countries.forEach(function(country) {
                renderCountriesAll(country)
            })    
            const countryCardAll = document.querySelectorAll('.countryCard')
            countryCardAll.forEach(function(div) {
                div.addEventListener('click', async function() {
                    const response = await fetch("https://restcountries.com/v3.1/all")
                        const countries = await response.json()
                        countries.forEach(function(country) {
                            if(country.translations.por.common === div.dataset.name) {
                                const popup = document.getElementById('popup')
                                const popupFlagImg = document.querySelector('.popupFlagImg')
                                const popupName = document.querySelector('.popupName')
                                const popupRegion = document.querySelector('.popupRegion')
                                const popupSubRegion = document.querySelector('.popupSubRegion')
                                const popupCapital = document.querySelector('.popupCapital')
                                const popupLanguage = document.querySelector('.popupLanguage')
                                const popupPopulation = document.querySelector('.popupPopulation')
                                const popupTimeZone = document.querySelector('.popupTimeZone')
                                const popupBorders = document.querySelector('.popupBorders')                            
    
                                popupFlagImg.src = country.flags.svg
                                popupName.innerText = `País: ${country.translations.por.common}`
                                popupRegion.innerText = `Região: ${country.region}`
                                popupPopulation.innerText = `População total: ${country.population}`

                                try {
                                    if(country.subregion) {
                                        popupSubRegion.innerText = `Sub Região: ${country.subregion}`
                                    } else {
                                        popupSubRegion.innerText = `Sub Região: Não há sub-região`
                                    }

                                    if(country.capital) {
                                        popupCapital.innerText = `Capital: ${country.capital}`
                                    } else {
                                        popupCapital.innerText = `Capital: Não há capital`
                                    }

                                    if(country.languages) {
                                        const countryLang = Object.values(country.languages)
                                        popupLanguage.innerText += ` ${countryLang[0]}`
                                    } else {
                                        popupLanguage.innerText += ` Não há idioma definido`
                                    }

                                    console.log(country.timezones.length - 1)
                                    
                                    for(i = 0; i <= (country.timezones.length - 1); i++) {
                                        if(i == country.timezones.length - 1) {
                                            popupTimeZone.innerText += ` ${country.timezones[i]}.`
                                        } else {
                                            popupTimeZone.innerText += ` ${country.timezones[i]},`
                                        }
                                    }

                                    const countryBorders = Object.values(country.borders)
                                    if(popupBorders.innerText == 'Fronteiras: ') {
                                        for(i = 0; i < countryBorders.length; i++) {
                                            if(i == (countryBorders.length - 1)) {
                                                popupBorders.innerText += ` ${countryBorders[i]}.`
                                            } else {
                                                popupBorders.innerText += ` ${countryBorders[i]},`
                                            }
                                        }
                                    }
                                } catch (error) {
                                    popupBorders.innerText += `Não há fronteiras`
                                    console.log(error)
                                }

                                popup.style.display = 'block'
                            }
                        })
                })
            })
        break

        case 'africa':
            countries.forEach(function(country) {
                renderCountriesSpecify(country, 'Africa')
            })
            const countryCardAfrica = document.querySelectorAll('.countryCard')
            countryCardAfrica.forEach(function(div) {
                div.addEventListener('click', async function() {
                    const response = await fetch("https://restcountries.com/v3.1/all")
                        const countries = await response.json()
                        countries.forEach(function(country) {
                            if(country.translations.por.common === div.dataset.name) {
                                const popup = document.getElementById('popup')
                                const popupFlagImg = document.querySelector('.popupFlagImg')
                                const popupName = document.querySelector('.popupName')
                                const popupRegion = document.querySelector('.popupRegion')
                                const popupSubRegion = document.querySelector('.popupSubRegion')
                                const popupCapital = document.querySelector('.popupCapital')
                                const popupLanguage = document.querySelector('.popupLanguage')
                                const popupPopulation = document.querySelector('.popupPopulation')
                                const popupTimeZone = document.querySelector('.popupTimeZone')
                                const popupBorders = document.querySelector('.popupBorders')                            
    
                                popupFlagImg.src = country.flags.svg
                                popupName.innerText = `País: ${country.translations.por.common}`
                                popupRegion.innerText = `Região: ${country.region}`
                                popupPopulation.innerText = `População total: ${country.population}`

                                try {
                                    if(country.subregion) {
                                        popupSubRegion.innerText = `Sub Região: ${country.subregion}`
                                    } else {
                                        popupSubRegion.innerText = `Sub Região: Não há sub-região`
                                    }

                                    if(country.capital) {
                                        popupCapital.innerText = `Capital: ${country.capital}`
                                    } else {
                                        popupCapital.innerText = `Capital: Não há capital`
                                    }

                                    if(country.languages) {
                                        const countryLang = Object.values(country.languages)
                                        popupLanguage.innerText += ` ${countryLang[0]}`
                                    } else {
                                        popupLanguage.innerText += ` Não há idioma definido`
                                    }

                                    console.log(country.timezones.length - 1)
                                    
                                    for(i = 0; i <= (country.timezones.length - 1); i++) {
                                        if(i == country.timezones.length - 1) {
                                            popupTimeZone.innerText += ` ${country.timezones[i]}.`
                                        } else {
                                            popupTimeZone.innerText += ` ${country.timezones[i]},`
                                        }
                                    }

                                    const countryBorders = Object.values(country.borders)
                                    if(popupBorders.innerText == 'Fronteiras: ') {
                                        for(i = 0; i < countryBorders.length; i++) {
                                            if(i == (countryBorders.length - 1)) {
                                                popupBorders.innerText += ` ${countryBorders[i]}.`
                                            } else {
                                                popupBorders.innerText += ` ${countryBorders[i]},`
                                            }
                                        }
                                    }
                                } catch (error) {
                                    popupBorders.innerText += `Não há fronteiras`
                                    console.log(error)
                                }

                                popup.style.display = 'block'
                            }
                        })
                })
            })
        break
        
        case 'america':
            countries.forEach(function(country) {
                renderCountriesSpecify(country, 'Americas')
            })
            const countryCardAmerica = document.querySelectorAll('.countryCard')
            countryCardAmerica.forEach(function(div) {
                div.addEventListener('click', async function() {
                    const response = await fetch("https://restcountries.com/v3.1/all")
                        const countries = await response.json()
                        countries.forEach(function(country) {
                            if(country.translations.por.common === div.dataset.name) {
                                const popup = document.getElementById('popup')
                                const popupFlagImg = document.querySelector('.popupFlagImg')
                                const popupName = document.querySelector('.popupName')
                                const popupRegion = document.querySelector('.popupRegion')
                                const popupSubRegion = document.querySelector('.popupSubRegion')
                                const popupCapital = document.querySelector('.popupCapital')
                                const popupLanguage = document.querySelector('.popupLanguage')
                                const popupPopulation = document.querySelector('.popupPopulation')
                                const popupTimeZone = document.querySelector('.popupTimeZone')
                                const popupBorders = document.querySelector('.popupBorders')                            
    
                                popupFlagImg.src = country.flags.svg
                                popupName.innerText = `País: ${country.translations.por.common}`
                                popupRegion.innerText = `Região: ${country.region}`
                                popupPopulation.innerText = `População total: ${country.population}`

                                try {
                                    if(country.subregion) {
                                        popupSubRegion.innerText = `Sub Região: ${country.subregion}`
                                    } else {
                                        popupSubRegion.innerText = `Sub Região: Não há sub-região`
                                    }

                                    if(country.capital) {
                                        popupCapital.innerText = `Capital: ${country.capital}`
                                    } else {
                                        popupCapital.innerText = `Capital: Não há capital`
                                    }

                                    if(country.languages) {
                                        const countryLang = Object.values(country.languages)
                                        popupLanguage.innerText += ` ${countryLang[0]}`
                                    } else {
                                        popupLanguage.innerText += ` Não há idioma definido`
                                    }

                                    console.log(country.timezones.length - 1)
                                    
                                    for(i = 0; i <= (country.timezones.length - 1); i++) {
                                        if(i == country.timezones.length - 1) {
                                            popupTimeZone.innerText += ` ${country.timezones[i]}.`
                                        } else {
                                            popupTimeZone.innerText += ` ${country.timezones[i]},`
                                        }
                                    }

                                    const countryBorders = Object.values(country.borders)
                                    if(popupBorders.innerText == 'Fronteiras: ') {
                                        for(i = 0; i < countryBorders.length; i++) {
                                            if(i == (countryBorders.length - 1)) {
                                                popupBorders.innerText += ` ${countryBorders[i]}.`
                                            } else {
                                                popupBorders.innerText += ` ${countryBorders[i]},`
                                            }
                                        }
                                    }
                                } catch (error) {
                                    popupBorders.innerText += `Não há fronteiras`
                                    console.log(error)
                                }

                                popup.style.display = 'block'
                            }
                        })
                })
            })
        break
        
        case 'antartica':
            countries.forEach(function(country) {
                renderCountriesSpecify(country, 'Antarctic')
            })
            const countryCardAntartica = document.querySelectorAll('.countryCard')
            countryCardAntartica.forEach(function(div) {
                div.addEventListener('click', async function() {
                    const response = await fetch("https://restcountries.com/v3.1/all")
                        const countries = await response.json()
                        countries.forEach(function(country) {
                            if(country.translations.por.common === div.dataset.name) {
                                const popup = document.getElementById('popup')
                                const popupFlagImg = document.querySelector('.popupFlagImg')
                                const popupName = document.querySelector('.popupName')
                                const popupRegion = document.querySelector('.popupRegion')
                                const popupSubRegion = document.querySelector('.popupSubRegion')
                                const popupCapital = document.querySelector('.popupCapital')
                                const popupLanguage = document.querySelector('.popupLanguage')
                                const popupPopulation = document.querySelector('.popupPopulation')
                                const popupTimeZone = document.querySelector('.popupTimeZone')
                                const popupBorders = document.querySelector('.popupBorders')                            
    
                                popupFlagImg.src = country.flags.svg
                                popupName.innerText = `País: ${country.translations.por.common}`
                                popupRegion.innerText = `Região: ${country.region}`
                                popupPopulation.innerText = `População total: ${country.population}`

                                try {
                                    if(country.subregion) {
                                        popupSubRegion.innerText = `Sub Região: ${country.subregion}`
                                    } else {
                                        popupSubRegion.innerText = `Sub Região: Não há sub-região`
                                    }

                                    if(country.capital) {
                                        popupCapital.innerText = `Capital: ${country.capital}`
                                    } else {
                                        popupCapital.innerText = `Capital: Não há capital`
                                    }

                                    if(country.languages) {
                                        const countryLang = Object.values(country.languages)
                                        popupLanguage.innerText += ` ${countryLang[0]}`
                                    } else {
                                        popupLanguage.innerText += ` Não há idioma definido`
                                    }

                                    console.log(country.timezones.length - 1)
                                    
                                    for(i = 0; i <= (country.timezones.length - 1); i++) {
                                        if(i == country.timezones.length - 1) {
                                            popupTimeZone.innerText += ` ${country.timezones[i]}.`
                                        } else {
                                            popupTimeZone.innerText += ` ${country.timezones[i]},`
                                        }
                                    }

                                    const countryBorders = Object.values(country.borders)
                                    if(popupBorders.innerText == 'Fronteiras: ') {
                                        for(i = 0; i < countryBorders.length; i++) {
                                            if(i == (countryBorders.length - 1)) {
                                                popupBorders.innerText += ` ${countryBorders[i]}.`
                                            } else {
                                                popupBorders.innerText += ` ${countryBorders[i]},`
                                            }
                                        }
                                    }
                                } catch (error) {
                                    popupBorders.innerText += `Não há fronteiras`
                                    console.log(error)
                                }

                                popup.style.display = 'block'
                            }
                        })
                })
            })
        break

        case 'asia':
            countries.forEach(function(country) {
                renderCountriesSpecify(country, 'Asia')
            })
            const countryCardAsia = document.querySelectorAll('.countryCard')
            countryCardAsia.forEach(function(div) {
                div.addEventListener('click', async function() {
                    const response = await fetch("https://restcountries.com/v3.1/all")
                        const countries = await response.json()
                        countries.forEach(function(country) {
                            if(country.translations.por.common === div.dataset.name) {
                                const popup = document.getElementById('popup')
                                const popupFlagImg = document.querySelector('.popupFlagImg')
                                const popupName = document.querySelector('.popupName')
                                const popupRegion = document.querySelector('.popupRegion')
                                const popupSubRegion = document.querySelector('.popupSubRegion')
                                const popupCapital = document.querySelector('.popupCapital')
                                const popupLanguage = document.querySelector('.popupLanguage')
                                const popupPopulation = document.querySelector('.popupPopulation')
                                const popupTimeZone = document.querySelector('.popupTimeZone')
                                const popupBorders = document.querySelector('.popupBorders')                            
    
                                popupFlagImg.src = country.flags.svg
                                popupName.innerText = `País: ${country.translations.por.common}`
                                popupRegion.innerText = `Região: ${country.region}`
                                popupPopulation.innerText = `População total: ${country.population}`

                                try {
                                    if(country.subregion) {
                                        popupSubRegion.innerText = `Sub Região: ${country.subregion}`
                                    } else {
                                        popupSubRegion.innerText = `Sub Região: Não há sub-região`
                                    }

                                    if(country.capital) {
                                        popupCapital.innerText = `Capital: ${country.capital}`
                                    } else {
                                        popupCapital.innerText = `Capital: Não há capital`
                                    }

                                    if(country.languages) {
                                        const countryLang = Object.values(country.languages)
                                        popupLanguage.innerText += ` ${countryLang[0]}`
                                    } else {
                                        popupLanguage.innerText += ` Não há idioma definido`
                                    }

                                    console.log(country.timezones.length - 1)
                                    
                                    for(i = 0; i <= (country.timezones.length - 1); i++) {
                                        if(i == country.timezones.length - 1) {
                                            popupTimeZone.innerText += ` ${country.timezones[i]}.`
                                        } else {
                                            popupTimeZone.innerText += ` ${country.timezones[i]},`
                                        }
                                    }

                                    const countryBorders = Object.values(country.borders)
                                    if(popupBorders.innerText == 'Fronteiras: ') {
                                        for(i = 0; i < countryBorders.length; i++) {
                                            if(i == (countryBorders.length - 1)) {
                                                popupBorders.innerText += ` ${countryBorders[i]}.`
                                            } else {
                                                popupBorders.innerText += ` ${countryBorders[i]},`
                                            }
                                        }
                                    }
                                } catch (error) {
                                    popupBorders.innerText += `Não há fronteiras`
                                    console.log(error)
                                }

                                popup.style.display = 'block'
                            }
                        })
                })
            })
        break

        case 'europa':
            countries.forEach(function(country) {
                renderCountriesSpecify(country, 'Europe')
            })
            const countryCardEuropa = document.querySelectorAll('.countryCard')
            countryCardEuropa.forEach(function(div) {
                div.addEventListener('click', async function() {
                    const response = await fetch("https://restcountries.com/v3.1/all")
                        const countries = await response.json()
                        countries.forEach(function(country) {
                            if(country.translations.por.common === div.dataset.name) {
                                const popup = document.getElementById('popup')
                                const popupFlagImg = document.querySelector('.popupFlagImg')
                                const popupName = document.querySelector('.popupName')
                                const popupRegion = document.querySelector('.popupRegion')
                                const popupSubRegion = document.querySelector('.popupSubRegion')
                                const popupCapital = document.querySelector('.popupCapital')
                                const popupLanguage = document.querySelector('.popupLanguage')
                                const popupPopulation = document.querySelector('.popupPopulation')
                                const popupTimeZone = document.querySelector('.popupTimeZone')
                                const popupBorders = document.querySelector('.popupBorders')                            
    
                                popupFlagImg.src = country.flags.svg
                                popupName.innerText = `País: ${country.translations.por.common}`
                                popupRegion.innerText = `Região: ${country.region}`
                                popupPopulation.innerText = `População total: ${country.population}`

                                try {
                                    if(country.subregion) {
                                        popupSubRegion.innerText = `Sub Região: ${country.subregion}`
                                    } else {
                                        popupSubRegion.innerText = `Sub Região: Não há sub-região`
                                    }

                                    if(country.capital) {
                                        popupCapital.innerText = `Capital: ${country.capital}`
                                    } else {
                                        popupCapital.innerText = `Capital: Não há capital`
                                    }

                                    if(country.languages) {
                                        const countryLang = Object.values(country.languages)
                                        popupLanguage.innerText += ` ${countryLang[0]}`
                                    } else {
                                        popupLanguage.innerText += ` Não há idioma definido`
                                    }

                                    console.log(country.timezones.length - 1)
                                    
                                    for(i = 0; i <= (country.timezones.length - 1); i++) {
                                        if(i == country.timezones.length - 1) {
                                            popupTimeZone.innerText += ` ${country.timezones[i]}.`
                                        } else {
                                            popupTimeZone.innerText += ` ${country.timezones[i]},`
                                        }
                                    }

                                    const countryBorders = Object.values(country.borders)
                                    if(popupBorders.innerText == 'Fronteiras: ') {
                                        for(i = 0; i < countryBorders.length; i++) {
                                            if(i == (countryBorders.length - 1)) {
                                                popupBorders.innerText += ` ${countryBorders[i]}.`
                                            } else {
                                                popupBorders.innerText += ` ${countryBorders[i]},`
                                            }
                                        }
                                    }
                                } catch (error) {
                                    popupBorders.innerText += `Não há fronteiras`
                                    console.log(error)
                                }

                                popup.style.display = 'block'
                            }
                        })
                })
            })
        break

        case 'oceania':
            countries.forEach(function(country) {
                renderCountriesSpecify(country, 'Oceania')
            })
            const countryCardOceania = document.querySelectorAll('.countryCard')
            countryCardOceania.forEach(function(div) {
                div.addEventListener('click', async function() {
                    const response = await fetch("https://restcountries.com/v3.1/all")
                        const countries = await response.json()
                        countries.forEach(function(country) {
                            if(country.translations.por.common === div.dataset.name) {
                                const popup = document.getElementById('popup')
                                const popupFlagImg = document.querySelector('.popupFlagImg')
                                const popupName = document.querySelector('.popupName')
                                const popupRegion = document.querySelector('.popupRegion')
                                const popupSubRegion = document.querySelector('.popupSubRegion')
                                const popupCapital = document.querySelector('.popupCapital')
                                const popupLanguage = document.querySelector('.popupLanguage')
                                const popupPopulation = document.querySelector('.popupPopulation')
                                const popupTimeZone = document.querySelector('.popupTimeZone')
                                const popupBorders = document.querySelector('.popupBorders')                            
    
                                popupFlagImg.src = country.flags.svg
                                popupName.innerText = `País: ${country.translations.por.common}`
                                popupRegion.innerText = `Região: ${country.region}`
                                popupPopulation.innerText = `População total: ${country.population}`

                                try {
                                    if(country.subregion) {
                                        popupSubRegion.innerText = `Sub Região: ${country.subregion}`
                                    } else {
                                        popupSubRegion.innerText = `Sub Região: Não há sub-região`
                                    }

                                    if(country.capital) {
                                        popupCapital.innerText = `Capital: ${country.capital}`
                                    } else {
                                        popupCapital.innerText = `Capital: Não há capital`
                                    }

                                    if(country.languages) {
                                        const countryLang = Object.values(country.languages)
                                        popupLanguage.innerText += ` ${countryLang[0]}`
                                    } else {
                                        popupLanguage.innerText += ` Não há idioma definido`
                                    }

                                    console.log(country.timezones.length - 1)
                                    
                                    for(i = 0; i <= (country.timezones.length - 1); i++) {
                                        if(i == country.timezones.length - 1) {
                                            popupTimeZone.innerText += ` ${country.timezones[i]}.`
                                        } else {
                                            popupTimeZone.innerText += ` ${country.timezones[i]},`
                                        }
                                    }

                                    const countryBorders = Object.values(country.borders)
                                    if(popupBorders.innerText == 'Fronteiras: ') {
                                        for(i = 0; i < countryBorders.length; i++) {
                                            if(i == (countryBorders.length - 1)) {
                                                popupBorders.innerText += ` ${countryBorders[i]}.`
                                            } else {
                                                popupBorders.innerText += ` ${countryBorders[i]},`
                                            }
                                        }
                                    }
                                } catch (error) {
                                    popupBorders.innerText += `Não há fronteiras`
                                    console.log(error)
                                }

                                popup.style.display = 'block'
                            }
                        })
                })
            })
        break
    }
}

//Função para pegar informações da APIS através do input search
async function searchCountry() {
    const response = await fetch("https://restcountries.com/v3.1/all")
    const countries = await response.json()
    await resetStyleContinents()
    await resetCardsForSearch()
    countryQuantityNumber = 0
    countries.forEach(async function(country) {
        const countryDefault = country.translations.por.common.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
        const countrySplit = country.translations.por.common.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").split(' ')
        const inputSearchDefault = inputSearch.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
        if(countryDefault == inputSearchDefault || countrySplit[0] == inputSearchDefault || countrySplit[1] == inputSearchDefault || countrySplit[2] == inputSearchDefault
            || countrySplit[3] == inputSearchDefault || countrySplit[4] == inputSearchDefault || countrySplit[5] == inputSearchDefault) {
            countryQuantityNumber += 1
            countryQuantity.innerHTML = `<div id="countryQuantity">Total: ${countryQuantityNumber}</div>`
            await renderCountriesSearch(country)  
        }
    })
    const countryCard = document.querySelectorAll('.countryCard')
    countryCard.forEach(function(div) {
        div.addEventListener('click', async function() {
                        countries.forEach(function(country) {
                            if(country.translations.por.common === div.dataset.name) {
                                const popup = document.getElementById('popup')
                                const popupFlagImg = document.querySelector('.popupFlagImg')
                                const popupName = document.querySelector('.popupName')
                                const popupRegion = document.querySelector('.popupRegion')
                                const popupSubRegion = document.querySelector('.popupSubRegion')
                                const popupCapital = document.querySelector('.popupCapital')
                                const popupLanguage = document.querySelector('.popupLanguage')
                                const popupPopulation = document.querySelector('.popupPopulation')
                                const popupTimeZone = document.querySelector('.popupTimeZone')
                                const popupBorders = document.querySelector('.popupBorders')                            
    
                                popupFlagImg.src = country.flags.svg
                                popupName.innerText = `País: ${country.translations.por.common}`
                                popupRegion.innerText = `Região: ${country.region}`
                                popupPopulation.innerText = `População total: ${country.population}`

                                try {
                                    if(country.subregion) {
                                        popupSubRegion.innerText = `Sub Região: ${country.subregion}`
                                    } else {
                                        popupSubRegion.innerText = `Sub Região: Não há sub-região`
                                    }

                                    if(country.capital) {
                                        popupCapital.innerText = `Capital: ${country.capital}`
                                    } else {
                                        popupCapital.innerText = `Capital: Não há capital`
                                    }

                                    if(country.languages) {
                                        const countryLang = Object.values(country.languages)
                                        popupLanguage.innerText += ` ${countryLang[0]}`
                                    } else {
                                        popupLanguage.innerText += ` Não há idioma definido`
                                    }

                                    console.log(country.timezones.length - 1)
                                    
                                    for(i = 0; i <= (country.timezones.length - 1); i++) {
                                        if(i == country.timezones.length - 1) {
                                            popupTimeZone.innerText += ` ${country.timezones[i]}.`
                                        } else {
                                            popupTimeZone.innerText += ` ${country.timezones[i]},`
                                        }
                                    }

                                    const countryBorders = Object.values(country.borders)
                                    if(popupBorders.innerText == 'Fronteiras: ') {
                                        for(i = 0; i < countryBorders.length; i++) {
                                            if(i == (countryBorders.length - 1)) {
                                                popupBorders.innerText += ` ${countryBorders[i]}.`
                                            } else {
                                                popupBorders.innerText += ` ${countryBorders[i]},`
                                            }
                                        }
                                    }
                                } catch (error) {
                                    popupBorders.innerText += `Não há fronteiras`
                                    console.log(error)
                                }

                                popup.style.display = 'block'
                            }
                        })
        })
    })
    inputSearch.value = ''
}


//Renderiza todos paises
function renderCountriesAll(country) {
    
    const div = document.createElement('div')
    div.id = 'countryCard'
    div.className = 'countryCard'
    div.dataset.name = country.translations.por.common
    
    const divNameFlag = document.createElement('div')
    divNameFlag.className = 'divNameFlag'

    const nameFlag = document.createElement('span')
    nameFlag.innerText = country.translations.por.common

    const imgCircle = document.createElement('div')
    imgCircle.className = 'imgCircle'

    const img = document.createElement('img')
    img.src = country.flags.svg

    const countryLang = country.languages
    
    if(countryLang) {
        countryQuantity.innerHTML = `<div id="countryQuantity">Total: 250</div>`
        imgCircle.appendChild(img)
        divNameFlag.appendChild(nameFlag)
        div.append(imgCircle, divNameFlag)
        countryFlags.appendChild(div) 
    } else {
        countryQuantity.innerHTML = `<div id="countryQuantity">Total: 250</div>`
        imgCircle.appendChild(img)
        divNameFlag.append(nameFlag)
        div.append (imgCircle, divNameFlag)
        countryFlags.appendChild(div)   
    }
}

//Renderiza os paises do continente selecionado
function renderCountriesSpecify(country, continent) {
    
    const div = document.createElement('div')
    div.id = 'countryCard'
    div.className = 'countryCard'
    div.dataset.name = country.translations.por.common
    
    const divNameFlag = document.createElement('div')
    divNameFlag.className = 'divNameFlag'

    const nameFlag = document.createElement('span')
    nameFlag.innerText = country.translations.por.common

    const imgCircle = document.createElement('div')
    imgCircle.className = 'imgCircle'

    const img = document.createElement('img')
    img.src = country.flags.svg

    const countryLang = country.languages
    
    if(countryLang && country.region === continent) {
        countryQuantityNumber += 1
        countryQuantity.innerHTML = `<div id="countryQuantity">Total: ${countryQuantityNumber}</div>`
        imgCircle.appendChild(img)
        divNameFlag.appendChild(nameFlag)
        div.append(imgCircle, divNameFlag)
        countryFlags.append(div) 
    } else if(country.region === continent){
        countryQuantityNumber += 1
        countryQuantity.innerHTML = `<div id="countryQuantity">Total: ${countryQuantityNumber}</div>`
        imgCircle.appendChild(img)
        divNameFlag.append(nameFlag)
        div.append (imgCircle, divNameFlag)
        countryFlags.appendChild(div)   
    }
}

//renderiza pais pesquisado no input search
async function renderCountriesSearch(country) {
    
    const div = document.createElement('div')
    div.id = 'countryCard'
    div.className = 'countryCard'
    div.dataset.name = country.translations.por.common
    
    const divNameFlag = document.createElement('div')
    divNameFlag.className = 'divNameFlag'

    const nameFlag = document.createElement('span')
    nameFlag.innerText = country.translations.por.common

    const imgCircle = document.createElement('div')
    imgCircle.className = 'imgCircle'

    const img = document.createElement('img')
    img.src = country.flags.svg
    
    imgCircle.appendChild(img)
    divNameFlag.appendChild(nameFlag)
    div.append(imgCircle, divNameFlag)
    countryFlags.append(div) 
}

//Pesquisa com a tecla ENTER
inputSearch.addEventListener('keypress', (ev) => {
    if(ev.key === 'Enter') {
        searchCountry()
    }
})

//Reseta o numero total dos paises
async function resetCardsForSearch() {
    const div = document.querySelectorAll('.countryCard')
    countryQuantity.innerHTML = `<div id="countryQuantity">Total: 0</div>`
    div.forEach( function(div){
        countryFlags.removeChild(div)
    })
}

const popupSpanClose = document.getElementById('popupSpanClose').addEventListener('click', closePopup)

//Fecha o popup
function closePopup() {
    const popup = document.getElementById('popup')
    popup.style.display = 'none'
    const popupBorders = document.querySelector('.popupBorders')
    const popupCapital = document.querySelector('.popupCapital')
    const popupLanguage = document.querySelector('.popupLanguage')
    const popupSubRegion = document.querySelector('.popupSubRegion')

    popupSubRegion.style.display = 'block'
    popupCapital.style.display = 'block'
    popupLanguage.style.display = 'block'
    popupBorders.style.display = 'block'
    resetPopup()
}

//Reseta as informações do popup
function resetPopup() {
    const popupFlagImg = document.querySelector('.popupFlagImg')
    const popupName = document.querySelector('.popupName')
    const popupRegion = document.querySelector('.popupRegion')
    const popupSubRegion = document.querySelector('.popupSubRegion')
    const popupCapital = document.querySelector('.popupCapital')
    const popupLanguage = document.querySelector('.popupLanguage')
    const popupPopulation = document.querySelector('.popupPopulation')
    const popupTimeZone = document.querySelector('.popupTimeZone')
    const popupBorders = document.querySelector('.popupBorders')

    popupFlagImg.src = ' '
    popupName.innerText = ' '
    popupRegion.innerText = ' '
    popupSubRegion.innerText = ' '
    popupCapital.innerText = ' '
    popupLanguage.innerText = 'Idioma: '
    popupPopulation.innerText = ' '
    popupTimeZone.innerText = 'Fuso horário: '
    popupBorders.innerText = 'Fronteiras: '
}

resetCards()
changeIcon()
getCountries('allFlags')
