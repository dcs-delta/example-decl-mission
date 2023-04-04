let queen = "nootshell";

trigger.action.outTextForCountry(country.id.ITALY, `best pal ${queen}`, 15);
trigger.action.outTextForCoalition(coalition.side.BLUE, `${queen} best`, 15);

for (const group of coalition.getGroups(coalition.side.BLUE)) {
	trigger.action.outText(`found blue group: ${group.getName()}`, 5);
}
