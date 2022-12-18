import { configureStore, createSlice } from '@reduxjs/toolkit';
import countryData from './data.js'
function setRealGroup() {
    const copiedData = [...countryData]
    const realGroupStage = [];
    for (let i = 0; i < 8; i++) {
        const singleGroup = [];
        for (let j = 0; j < 4; j++) {
            let popped = copiedData.shift();
            singleGroup.push(popped);
        }
        realGroupStage.push(singleGroup);
    }
    return realGroupStage;
}
const realGroupStage = setRealGroup();
let countriesFixed = createSlice({
    name: 'countriesFixed',
    initialState: countryData,
})

let countries = createSlice({
    name: 'countries',
    initialState: realGroupStage,
    reducers: {
        realGroup() {
            return realGroupStage;
        },
        possibleGroup() {
            return null;
        },
        randomGroup(state) {
            const copiedData = [...countryData];
            const randomGroupStage = [];
            for (let i = 0; i < 8; i++) {
                const singleGroup = [];
                for (let j = 0; j < 4; j++) {
                    const random = Math.floor(Math.random() * copiedData.length);
                    let popped = copiedData.splice(random, 1);
                    popped = popped[0];
                    singleGroup.push(popped);
                }
                randomGroupStage.push(singleGroup);
            }
            return randomGroupStage;
        },
        sortGroup(state) {
            let groupResult = [];
            function sortOneGroup(group, random) {
                let oneGroupResult = []
                group = [...group];
                let idx;
                let matchRule;
                switch (random) {
                    case 0:
                        matchRule = Array.from(group, country => country.name);
                        matchRule.sort();
                        for (let value of matchRule) {
                            for (let country of group) {
                                if (country.name === value) {
                                    oneGroupResult.push({ ...country })
                                    group.splice(group.indexOf(country), 1)
                                    break;
                                }
                            }
                        }
                        for (let country of oneGroupResult) {
                            country.current = [country.current, country.name].join("➜")
                        }
                        break;
                    case 1:
                        matchRule = Array.from(group, country => country.group);
                        matchRule.sort();
                        for (let value of matchRule) {
                            for (let country of group) {
                                if (country.group === value) {
                                    oneGroupResult.push({ ...country })
                                    group.splice(group.indexOf(country), 1)
                                    break;
                                }
                            }
                        }
                        for (let country of oneGroupResult) {
                            country.current = [country.current, country.group].join("➜")
                        }
                        break;
                    case 2:
                        matchRule = Array.from(group, country => country.appearances);
                        function compareNumbers(a, b) {
                            return a - b;
                        }
                        matchRule.sort(compareNumbers);
                        matchRule = matchRule.reverse();
                        for (let value of matchRule) {
                            for (let country of group) {
                                if (country.appearances === value) {
                                    oneGroupResult.push({ ...country })
                                    group.splice(group.indexOf(country), 1)
                                    break;
                                }
                            }
                        }
                        for (let country of oneGroupResult) {
                            country.current = [country.current, "Appearances: " + country.appearances].join("➜")
                        }
                        break;
                    case 3:
                        matchRule = Array.from(group, country => country.bestPerformance);
                        matchRule = matchRule.map((value) => {
                            switch (value) {
                                case "Qualifiers":
                                    return 'A';
                                case "Group stage":
                                    return 'B';
                                case "Round of 16":
                                    return 'C'
                                case "Quarter-finals":
                                    return 'D'
                                case "Third":
                                    return 'H'
                                default:
                                    return value

                            }
                        })
                        matchRule.sort();
                        matchRule = matchRule.reverse();
                        matchRule = matchRule.map((value) => {
                            switch (value) {
                                case "A":
                                    return 'Qualifiers';
                                case "B":
                                    return 'Group stage';
                                case "C":
                                    return 'Round of 16'
                                case "D":
                                    return 'Quarter-finals'
                                case "H":
                                    return 'Third'
                                default:
                                    return value

                            }
                        })
                        for (let value of matchRule) {
                            for (let country of group) {
                                if (country.bestPerformance === value) {
                                    oneGroupResult.push({ ...country })
                                    group.splice(group.indexOf(country), 1)
                                    break;
                                }
                            }
                        }
                        for (let country of oneGroupResult) {
                            country.current = [country.current, "Best Performance: " + country.bestPerformance].join("➜")
                        }
                        break;
                    case 4:
                        matchRule = Array.from(group, country => country.lastPerformance);
                        matchRule = matchRule.map((value) => {
                            switch (value) {
                                case "Qualifiers":
                                    return 'A';
                                case "Group stage":
                                    return 'B';
                                case "Round of 16":
                                    return 'C'
                                case "Quarter-finals":
                                    return 'D'
                                case "Third":
                                    return 'H'
                                default:
                                    return value

                            }
                        })
                        matchRule.sort();
                        matchRule = matchRule.reverse();
                        matchRule = matchRule.map((value) => {
                            switch (value) {
                                case "A":
                                    return 'Qualifiers';
                                case "B":
                                    return 'Group stage';
                                case "C":
                                    return 'Round of 16'
                                case "D":
                                    return 'Quarter-finals'
                                case "H":
                                    return 'Third'
                                default:
                                    return value

                            }
                        })
                        for (let value of matchRule) {
                            for (let country of group) {
                                if (country.lastPerformance === value) {
                                    oneGroupResult.push({ ...country })
                                    group.splice(group.indexOf(country), 1)
                                    break;
                                }
                            }
                        }
                        for (let country of oneGroupResult) {
                            country.current = [country.current, "Last Performance: " + country.lastPerformance].join("➜")
                        }
                        break;
                    case 5:
                        matchRule = Array.from(group, country => country.keyPlayer);
                        matchRule.sort();
                        for (let value of matchRule) {
                            for (let country of group) {
                                if (country.keyPlayer === value) {
                                    oneGroupResult.push({ ...country })
                                    group.splice(group.indexOf(country), 1)
                                    break;
                                }
                            }
                        }
                        for (let country of oneGroupResult) {
                            country.current = [country.current, "Key Player: " + country.keyPlayer].join("➜")
                        }
                        break;

                }
                /* idx = 0;
                while (idx <= matchRule.length) {
                    if (matchRule.indexOf(matchRule[idx]) !== matchRule.lastIndexOf(matchRule[idx])) {
                        let diff = matchRule.lastIndexOf(matchRule[idx]) - matchRule.indexOf(matchRule[idx]);
                        let random = Math.floor(Math.random() * 6);
                        let before = oneGroupResult.slice(0, idx);
                        let after = oneGroupResult.slice(idx + diff + 1, matchRule.length);
                        oneGroupResult = before.concat(sortOneGroup(oneGroupResult.slice(idx, idx + diff + 1), random), after);
                        idx += (diff + 1);
                    } else {
                        idx += 1;
                    } 
                } 
                */
                return oneGroupResult;
            }

            for (let group of state) {
                let random = Math.floor(Math.random() * 6);
                let sortedGroup = sortOneGroup(group, random);
                groupResult.push(sortedGroup);
            }
            return groupResult;
        }

    }
}
)

let knockout = createSlice({
    name: 'knockout',
    initialState: {
        roundOf16Countries: Array(16).fill("TBD"),
        quarterFinalsCountries: Array(8).fill("TBD"),
        semiFinalsCountries: Array(4).fill("TBD"),
        finalsCountries: Array(2).fill("TBD"),
        winnerCountry: ["TBD"],
        knockoutRound: Array(8).fill(""),
        roundOf16Results: Array(16).fill("-"),
        quarterFinalsResults: Array(8).fill("-"),
        semiFinalsResults: Array(4).fill("-"),
        finalsResults: Array(2).fill("-"),
    },
    reducers: {
        setRoundOf16(state, groupResult) {
            let knockoutRound = [];
            let left = [];
            let right = [];
            let bool = true;
            for (let group of groupResult.payload) {
                if (bool) {
                    left.push(group[0]);
                    right.push(group[1]);
                    bool = false;
                } else {
                    left.push(group[1]);
                    right.splice(-1, 0, group[0]);
                    bool = true;
                }
            }
            left = left.concat(right);
            for (let j = 0; j < left.length; j++) {
                state.roundOf16Countries.splice(j, 1, left[j].name);
            }
            for (let i = 0; i < left.length; i += 2) {
                let match = [];
                match.push(left[i]);
                match.push(left[i + 1]);
                knockoutRound.push(match);
            }
            state.knockoutRound = knockoutRound;
        },
        sortKnockout(state) {
            let nextRoundFinal = [];
            let nextRound = [];
            let nextRoundCountryName = [];
            let thisRoundResults = [];
            for (let match of state.knockoutRound) {
                let random = Math.floor(Math.random() * 6);
                let matchRule;
                switch (random) {
                    case 0:
                        if (match[0].name < match[1].name) {
                            nextRound.push(match[0]);
                            thisRoundResults.push(match[0].name);
                            thisRoundResults.push(match[1].name);
                        } else {
                            nextRound.push(match[1]);
                            thisRoundResults.push(match[0].name);
                            thisRoundResults.push(match[1].name);
                        }
                        break;
                    case 1:
                        if (match[0].group < match[1].group) {
                            nextRound.push(match[0]);
                            thisRoundResults.push(match[0].group);
                            thisRoundResults.push(match[1].group);
                        } else {
                            nextRound.push(match[1]);
                            thisRoundResults.push(match[0].group);
                            thisRoundResults.push(match[1].group);
                        }
                        break;
                    case 2:
                        if (match[0].appearances > match[1].appearances) {
                            nextRound.push(match[0]);
                            thisRoundResults.push(match[0].appearances);
                            thisRoundResults.push(match[1].appearances);
                        } else {
                            nextRound.push(match[1]);
                            thisRoundResults.push(match[0].appearances);
                            thisRoundResults.push(match[1].appearances);
                        }
                        break;
                    case 3:
                        matchRule = [match[0].bestPerformance, match[1].bestPerformance];
                        matchRule = matchRule.map((value) => {
                            switch (value) {
                                case "Qualifiers":
                                    return 'A';
                                case "Group stage":
                                    return 'B';
                                case "Round of 16":
                                    return 'C'
                                case "Quarter-finals":
                                    return 'D';
                                case "Third":
                                    return 'H';
                                default:
                                    return value;
                            }
                        })
                        if (match[0].bestPerformance > match[1].bestPerformance) {
                            nextRound.push(match[0]);
                            thisRoundResults.push(match[0].bestPerformance);
                            thisRoundResults.push(match[1].bestPerformance);
                        } else {
                            nextRound.push(match[1]);
                            thisRoundResults.push(match[0].bestPerformance);
                            thisRoundResults.push(match[1].bestPerformance); 
                        }
                        break;
                    case 4:
                        matchRule = [match[0].lastPerformance, match[1].lastPerformance];
                        matchRule = matchRule.map((value) => {
                            switch (value) {
                                case "Qualifiers":
                                    return 'A';
                                case "Group stage":
                                    return 'B';
                                case "Round of 16":
                                    return 'C'
                                case "Quarter-finals":
                                    return 'D'
                                case "Third":
                                    return 'H'
                                default:
                                    return value

                            }
                        })
                        if (match[0].lastPerformance > match[1].lastPerformance) {
                            nextRound.push(match[0]);
                            thisRoundResults.push(match[0].lastPerformance);
                            thisRoundResults.push(match[1].lastPerformance);
                        } else {
                            nextRound.push(match[1]);
                            thisRoundResults.push(match[0].lastPerformance);
                            thisRoundResults.push(match[1].lastPerformance);
                        }
                        break;
                    case 5:
                        if (match[0].keyPlayer < match[1].keyPlayer) {
                            nextRound.push(match[0]);
                            thisRoundResults.push(match[0].keyPlayer);
                            thisRoundResults.push(match[1].keyPlayer);
                        } else {
                            nextRound.push(match[1]);
                            thisRoundResults.push(match[0].keyPlayer);
                            thisRoundResults.push(match[1].keyPlayer);
                        }
                        break;
                }
            }
            for (let country of nextRound) {
                nextRoundCountryName.push(country.name);
            }
            switch (nextRound.length) {
                case 8:
                    state.quarterFinalsCountries = nextRoundCountryName;
                    state.roundOf16Results = thisRoundResults;
                    break;
                case 4:
                    state.semiFinalsCountries = nextRoundCountryName;
                    state.quarterFinalsResults = thisRoundResults;
                    break;
                case 2:
                    state.finalsCountries = nextRoundCountryName;
                    state.semiFinalsResults = thisRoundResults;
                    break;
                case 1:
                    state.winnerCountry = nextRoundCountryName;
                    state.finalsResults = thisRoundResults;
            }
            for (let i = 0; i < nextRound.length; i += 2) {
                let match = [];
                match.push(nextRound[i]);
                match.push(nextRound[i + 1]);
                nextRoundFinal.push(match);
            }
            state.knockoutRound = nextRoundFinal;
        },
        resetKnockout(state) {
            return {
                roundOf16Countries: Array(16).fill("TBD"),
                quarterFinalsCountries: Array(8).fill("TBD"),
                semiFinalsCountries: Array(4).fill("TBD"),
                finalsCountries: Array(2).fill("TBD"),
                winnerCountry: ["TBD"],
                knockoutRound: Array(8).fill(""),
                roundOf16Results: Array(16).fill("-"),
                quarterFinalsResults: Array(8).fill("-"),
                semiFinalsResults: Array(4).fill("-"),
                finalsResults: Array(2).fill("-"),
            }
        }

    }
})

let showCountryCard = createSlice({
    name: 'countryCard',
    initialState: false,
    reducers: {
        setCountryCard(state) {
            if (state === false) {
                return true
            } else {
                return false
            }
        }
    }
})

let currentCountry = createSlice({
    name: 'currentCountry',
    initialState: {},
    reducers: {
        setCurrentCountry(state, country) {
            return country.payload
        }
    }
})

let continueButton = createSlice({
    name: 'continueButton',
    initialState: 0,
    reducers: {
        setContinueButton(state) {
            return state += 1;
        },
        resetContinueButton(state) {
            return 0
        }
    }
})
export default configureStore({
    reducer: {
        countriesFixed: countriesFixed.reducer,
        countries: countries.reducer,
        showCountryCard: showCountryCard.reducer,
        currentCountry: currentCountry.reducer,
        continueButton: continueButton.reducer,
        knockout: knockout.reducer,
    }
})
export let { randomGroup, realGroup, sortGroup } = countries.actions;
export let { setCountryCard } = showCountryCard.actions;
export let { setCurrentCountry } = currentCountry.actions;
export let { setContinueButton, resetContinueButton } = continueButton.actions;
export let { setRoundOf16, sortKnockout, resetKnockout } = knockout.actions;