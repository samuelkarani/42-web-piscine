#!/usr/bin/env node

function error() {
    console.error("Wrong format");
}

if (process.argv.length >= 3) {
    const dateString = process.argv[2];
    if (
        /^(?:lundi|mardi|mecredi|jeudi|vendredi|samedi|dimanche)\s\d{1,2}\s(?:janviere|fevrier|mars|avril|mai|juin|juillet|aout|septembre|octobre|novembre|decembre)\s\d{4}\s\d{2}:\d{2}:\d{2}$/gi.test(
            dateString
        ) &&
        !isNaN(Date.parse(dateString))
    ) {
        console.log(Date.parse(dateString));
    } else {
        error();
    }
}