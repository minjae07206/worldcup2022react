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
            function possibleGroupIn() {
                const copiedData = [...countryData];
                const possibleGroupStage = [[], [], [], [], [], [], [], []]
                let seeds = [[], [], [], []];
                let groupLength = 0;
                for (let country of copiedData) {
                    seeds[country.seed - 1].push(country);
                }
                for (let seed of seeds) {
                    for (let i = 0; i < 8; i++) {
                        if (i === 0 && seed[i].name === 'Qatar') {
                            possibleGroupStage[0].push(seed[i])
                            seed.splice(i, 1);
                        } else {
                            let random = Math.floor(Math.random() * seed.length);
                            let popped = seed.splice(random, 1);
                            popped = popped[0];
                            for (let group of possibleGroupStage) {
                                let europeCount = 0;
                                let same = false;
                                if (group.length === 0) {
                                    group.push(popped);
                                    break;
                                } else if (group.length > groupLength) {
                                    continue;
                                } else {
                                    for (let country of group) {
                                        if (country.continent === popped.continent) {
                                            if (popped.continent === 'europe') {
                                                europeCount += 1;
                                            } else {
                                                same = true;
                                            }
                                        }
                                    }
                                    if (europeCount > 1) {
                                        same = true;
                                    }
                                    if (same === false) {
                                        group.push(popped);
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    groupLength += 1;
                }
                let thisWorks = true;
                for (let group of possibleGroupStage) {
                    if (group.length < 4) {
                        thisWorks = false
                    }
                }
                if (thisWorks) {
                    return possibleGroupStage;
                } else {
                    return possibleGroupIn();
                }
            }
            const result = possibleGroupIn();
            return result;
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
                            country.current = country.name
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
                            country.current = country.group
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
                            country.current = "Appearances: " + country.appearances
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
                            country.current = "Best Performance: " + country.bestPerformance
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
                            country.current = "Last Performance: " + country.lastPerformance
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
                            country.current = "Key Player: " + country.keyPlayer
                        }
                        break;
                    default:
                        matchRule = [];
                        for (let country of group) {
                            let random = Math.floor(Math.random() * 3);
                            matchRule.push(country.otherPlayers[random])
                        }
                        matchRule.sort();
                        for (let value of matchRule) {
                            for (let country of group) {
                                if (country.otherPlayers.includes(value)) {
                                    oneGroupResult.push({ ...country })
                                    group.splice(group.indexOf(country), 1)
                                    break;
                                }
                            }
                        }
                        for (let i = 0; i < matchRule.length; i++) {
                            oneGroupResult[i].current = oneGroupResult[i].current + "➜ Player: " + matchRule[i];
                        }
                        break;

                }
                idx = 0;
                while (idx <= matchRule.length) {
                    if (matchRule.indexOf(matchRule[idx]) !== matchRule.lastIndexOf(matchRule[idx])) {
                        let diff = matchRule.lastIndexOf(matchRule[idx]) - matchRule.indexOf(matchRule[idx]);
                        let before = oneGroupResult.slice(0, idx);
                        let after = oneGroupResult.slice(idx + diff + 1, matchRule.length);
                        oneGroupResult = before.concat(sortOneGroup(oneGroupResult.slice(idx, idx + diff + 1), 6), after);
                        idx += (diff + 1);
                    } else {
                        idx += 1;
                    }
                }

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
        roundOf16Flags: Array(16).fill(""),
        quarterFinalsFlags: Array(8).fill(""),
        semiFinalsFlags: Array(4).fill(""),
        finalsFlags: Array(2).fill(""),
        winnerFlag: ""
    },
    reducers: {
        setRoundOf16(state, groupResult) {
            let knockoutRound = [];
            let flags = [];
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
                flags.splice(j, 1, left[j].image);
            }
            for (let i = 0; i < left.length; i += 2) {
                let match = [];
                match.push(left[i]);
                match.push(left[i + 1]);
                knockoutRound.push(match);
            }
            state.knockoutRound = knockoutRound;
            state.roundOf16Flags = flags;
        },
        sortKnockout(state) {
            function ifTied(firstCountry, secondCountry) {
                let random1 = Math.floor(Math.random() * 3);
                let random2 = Math.floor(Math.random() * 3);
                let firstResult = firstCountry.otherPlayers[random1];
                let secondResult = secondCountry.otherPlayers[random2];
                if (firstResult > secondResult) {
                    return [secondCountry, firstResult, secondResult]
                } else {
                    return [firstCountry, firstResult, secondResult]
                }
            }
            let nextRoundFinal = [];
            let nextRound = [];
            let nextRoundCountryName = [];
            let thisRoundResults = [];
            let flags = [];
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
                        if (match[0].group === match[1].group) {
                            let resultList = ifTied(match[0], match[1]);
                            let result1 = match[0].group + '➜' + resultList[1];
                            let result2 = match[1].group + '➜' + resultList[2];
                            nextRound.push(resultList[0]);
                            thisRoundResults.push(result1, result2);
                        } else if (match[0].group < match[1].group) {
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
                        let appearances1 = parseInt(match[0].appearances, 10);
                        let appearances2 = parseInt(match[1].appearances, 10)
                        if (appearances1 === appearances2) {
                            let resultList = ifTied(match[0], match[1]);
                            let result1 = appearances1 + '➜' + resultList[1];
                            let result2 = appearances2 + '➜' + resultList[2];
                            nextRound.push(resultList[0]);
                            thisRoundResults.push(result1, result2);
                        } else if (appearances1 > appearances2) {
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
                        if (matchRule[0] === matchRule[1]) {
                            let resultList = ifTied(match[0], match[1]);
                            let result1 = match[0].bestPerformance + '➜' + resultList[1];
                            let result2 = match[1].bestPerformance + '➜' + resultList[2];
                            nextRound.push(resultList[0]);
                            thisRoundResults.push(result1, result2);
                        } else if (matchRule[0] > matchRule[1]) {
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
                        if (matchRule[0] === matchRule[1]) {
                            let resultList = ifTied(match[0], match[1]);
                            let result1 = match[0].lastPerformance + '➜' + resultList[1];
                            let result2 = match[1].lastPerformance + '➜' + resultList[2];
                            nextRound.push(resultList[0]);
                            thisRoundResults.push(result1, result2);
                        } else if (matchRule[0] > matchRule[1]) {
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
                flags.push(country.image);
            }
            switch (nextRound.length) {
                case 8:
                    state.quarterFinalsCountries = nextRoundCountryName;
                    state.roundOf16Results = thisRoundResults;
                    state.quarterFinalsFlags = flags;
                    break;
                case 4:
                    state.semiFinalsCountries = nextRoundCountryName;
                    state.quarterFinalsResults = thisRoundResults;
                    state.semiFinalsFlags = flags;
                    break;
                case 2:
                    state.finalsCountries = nextRoundCountryName;
                    state.semiFinalsResults = thisRoundResults;
                    state.finalsFlags = flags;
                    break;
                case 1:
                    state.winnerCountry = nextRoundCountryName;
                    state.finalsResults = thisRoundResults;
                    state.winnerFlag = flags;
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
                roundOf16Flags: Array(16).fill(""),
                quarterFinalsFlags: Array(8).fill(""),
                semiFinalsFlags: Array(4).fill(""),
                finalsFlags: Array(2).fill(""),
                winnerFlag: ""
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
export let { randomGroup, realGroup, sortGroup, possibleGroup } = countries.actions;
export let { setCountryCard } = showCountryCard.actions;
export let { setCurrentCountry } = currentCountry.actions;
export let { setContinueButton, resetContinueButton } = continueButton.actions;
export let { setRoundOf16, sortKnockout, resetKnockout } = knockout.actions;