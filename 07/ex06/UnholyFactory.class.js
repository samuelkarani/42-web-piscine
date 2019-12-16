class UnholyFactory {
    absorb(fighterType) {
        if (this.isAbsorbed(fighterType)) {
            console.log(
                `(Factory already absorbed a fighter of type ${fighterType.type})`
            );
        } else {
            if (this.fighter(fighterType.constructor.name) == true) {
                UnholyFactory.absorbedFighters.push(fighterType);
                console.log(`(Factory absorbed a fighter of type ${fighterType.type})`);
            } else {
                console.log(`(Factory can't absorb this, it's not a fighter)`);
            }
        }
    }

    isAbsorbed(fighterType) {
        for (const i in UnholyFactory.absorbedFighters) {
            if (
                UnholyFactory.absorbedFighters[i].constructor.name ==
                fighterType.constructor.name
            )
                return true;
        }
        return false;
    }

    fighter(fighterTypeName) {
        return (
            fighterTypeName == "Footsoldier" ||
            fighterTypeName == "Archer" ||
            fighterTypeName == "Assassin"
        );
    }

    fabricate(requestedFighter) {
        for (const i in UnholyFactory.absorbedFighters) {
            if (UnholyFactory.absorbedFighters[i].type == requestedFighter) {
                console.log(
                    `(Factory fabricates a fighter of type ${requestedFighter})`
                );
                return UnholyFactory.absorbedFighters[i];
            }
        }
        console.log(
            `(Factory hasn't absorbed any fighter of type ${requestedFighter})`
        );
        return null;
    }
}

UnholyFactory.absorbedFighters = [];

module.exports = UnholyFactory;