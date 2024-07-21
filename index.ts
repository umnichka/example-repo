import {
	Ability,
	Creep,
	Entity,
	EventsSDK,
	Hero,
	LocalPlayer,
	Menu,
	EntityManager,
} from "github.com/octarine-public/wrapper/index"

const getLocalHero = (): Nullable<Hero> => {
	const hero: Nullable<Hero> = LocalPlayer?.Hero
	if (hero === undefined || !hero.IsAlive) {
		return
	}
	return hero
}

EventsSDK.on('EntityDestroyed', (ent: Entity): void => {
	console.log(EntityManager)
})
