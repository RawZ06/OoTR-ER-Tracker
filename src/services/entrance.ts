import colossus from '../../data/colossus.json'
import fortress from '../../data/fortress.json'
import valley from '../../data/valley.json'
import wasteland from '../../data/wasteland.json'

export type AreaName = 'colossus' | 'fortress' | 'valley' | 'wasteland';
export type Entrance = {
    reverse: string
}
export type Area = {
    area: string,
    entrances: {[key: string]: Entrance}
}

export function getAreas(): {[key in AreaName]: Area} {
    return {
        colossus, fortress, valley, wasteland
    }
}

export function getEntrances() {
    return Object.values(getAreas())
}

export function getArea(name: AreaName) {
    return getAreas()[name];
}