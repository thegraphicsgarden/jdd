var mostRead = [
	{ title: "Dyschromia in Skin Color", url: "#" },
	{ title: "What is New Fungal Pharmacotherapeutics", url: "#" },
	{ title: "Inflammation and Acne: Putting the Pieces Together", url: "#" },
	{ title: "Periorbital Hyperpigmentation: Review of Etiology, Medical Evaluation, and Aesthetic Treatment", url: "#" },
	{ title: "Gender Differences in Alopecia Areata", url: "#" }
];
var mostCited = [
	{ title: "Yurtle the Turtle", url: "#" },
	{ title: "One Fish, Two Fish, Red Fish, Blue Fish", url: "#" },
	{ title: "Cat in the Hat", url: "#" },
	{ title: "Hop On Pop", url: "#" },
	{ title: "Green Eggs and Ham", url: "#" }
];
Template.sidebar.helpers({
	mostRead: mostRead,
	mostCited: mostCited
});
Template.footer.helpers({
	mostRead: mostRead,
	mostCited: mostCited
});