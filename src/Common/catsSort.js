// 65.
// pagal ka sortinam ir pagal steita
function catsSort(state, by) {
    const allCats = state.slice();

    switch (by) {
        case 'breed_Asc':
            allCats.sort(function (a, b) {
                const breedA = a.breed.toUpperCase(); // ignore upper and lowercase
                const breedB = b.breed.toUpperCase(); // ignore upper and lowercase
                if (breedA < breedB) {
                    return -1;
                }
                if (breedA > breedB) {
                    return 1;
                }
                // breeds must be equal
                return 0;
            });
            break;
        case 'breed_Desc':
            allCats.sort(function (a, b) {
                const breedA = a.breed.toUpperCase();
                const breedB = b.breed.toUpperCase();
                if (breedA < breedB) {
                    return 1;
                }
                if (breedA > breedB) {
                    return -1;
                }
                return 0;
            });
            break;
        case 'behaviour_Asc':
            allCats.sort(function (a, b) {
                const behaviourA = a.behaviour.toUpperCase(); // ignore upper and lowercase
                const behaviourB = b.behaviour.toUpperCase(); // ignore upper and lowercase
                if (behaviourA < behaviourB) {
                    return -1;
                }
                if (behaviourA > behaviourB) {
                    return 1;
                }
                // breeds must be equal
                return 0;
            });
            break;
        case 'behaviour_Desc':
            allCats.sort(function (a, b) {
                const behaviourA = a.behaviour.toUpperCase();
                const behaviourB = b.behaviour.toUpperCase();
                if (behaviourA < behaviourB) {
                    return 1;
                }
                if (behaviourA > behaviourB) {
                    return -1;
                }
                return 0;
            });
            break;
            case 'age_Asc':
                allCats.sort(function (a, b) {
                    const ageA = a.age.toUpperCase(); // ignore upper and lowercase
                    const ageB = b.age.toUpperCase(); // ignore upper and lowercase
                    if (ageA < ageB) {
                        return -1;
                    }
                    if (ageA > ageB) {
                        return 1;
                    }
                    // breeds must be equal
                    return 0;
                });
                break;
            case 'age_Desc':
                allCats.sort(function (a, b) {
                    const ageA = a.age.toUpperCase();
                    const ageB = b.age.toUpperCase();
                    if (ageA < ageB) {
                        return 1;
                    }
                    if (ageA > ageB) {
                        return -1;
                    }
                    return 0;
                });
                break;
            case 'size_Asc':
            allCats.sort(function (a, b) {
                return a.size - b.size;
            });
            break;
            case 'size_Desc':
            allCats.sort(function (a, b) {
                return b.size - a.size;
            });
            break;
        
        default:

    }
    return allCats;
}
export default catsSort;