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
                let idx;
                let matchRule;
                switch (random) {
                    case 0:
                        matchRule = Array.from(group, country => country.name);
                        matchRule.sort();
                        matchRule = matchRule.reverse();
                        for (let country of group) {
                            for (let value of matchRule) {
                                if (country.name === value) {
                                    oneGroupResult.push(country)
                                }
                            }
                        }
                        idx = 0;
                        while (idx < matchRule.length) {
                            if (matchRule.indexOf(matchRule[idx]) !== matchRule.lastIndexOf(matchRule[idx])) {
                                let diff = matchRule.lastIndexOf(matchRule[idx]) - matchRule.indexOf(matchRule[idx]);
                                let random = Math.floor(Math.random() * 6);
                                let before = oneGroupResult.slice(0, idx);
                                let after = oneGroupResult.slice(idx + diff + 1, matchRule.length);
                                idx += (diff + 1);
                                return before.concat(sortOneGroup(oneGroupResult.slice(idx - (diff + 1), idx), random), after);
                            }
                        }
                        break;
                    case 1:
                        matchRule = Array.from(group, country => country.group);
                        matchRule.sort();
                        matchRule = matchRule.reverse();
                        for (let country of group) {
                            for (let value of matchRule) {
                                if (country.name === value) {
                                    oneGroupResult.push(country)
                                }
                            }
                        }
                        idx = 0;
                        while (idx < matchRule.length) {
                            if (matchRule.indexOf(matchRule[idx]) !== matchRule.lastIndexOf(matchRule[idx])) {
                                let diff = matchRule.lastIndexOf(matchRule[idx]) - matchRule.indexOf(matchRule[idx]);
                                let random = Math.floor(Math.random() * 6);
                                let before = oneGroupResult.slice(0, idx);
                                let after = oneGroupResult.slice(idx + diff + 1, matchRule.length);
                                idx += (diff + 1);
                                return before.concat(sortOneGroup(oneGroupResult.slice(idx - (diff + 1), idx), random), after);
                            }
                        }
                        break;
                    case 2:
                        break;
                    case 3:
                        break;
                    case 4:
                        break;
                    case 5:
                        break;

                }
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

let roundOf16 = createSlice({
    name: 'roundOf16',
    initialState: [],
    reducers: {
        setRoundOf16(state) {

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
    }
})
export let { randomGroup, realGroup, sortGroup } = countries.actions;
export let { setCountryCard } = showCountryCard.actions;
export let { setCurrentCountry } = currentCountry.actions;
export let { setContinueButton, resetContinueButton } = continueButton.actions;