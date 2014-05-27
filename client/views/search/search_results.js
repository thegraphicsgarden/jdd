var pathArray;
var results = [
	{ title: "Use of Dermoscopy to Monitor Melanoctic Lesions: Risks and Benefits",
	authors: "Harald Kittler, MD" },

	{ title: "Recognition of Skin Cancer and Sun Protective Behaviors in Skin of Color",
	authors: "Chikoti M. Wheat MD,a Naissan O. Wesley MD,b and Brooke A. Jackson MDc" },

	{ title: "Cosmeceuticals for Recurrence Prevention After Prior Skin Cancer: An Overview",
	authors: "Katlein França MD MSc,a Joel L. Cohen MD,b and Lisa Grunebaum MDc" },

	{ title: "Plasma Skin Regeneration Technology",
	authors: "Melissa A. Bogle MD, Kenneth A. Arndt MD, Jeffrey S. Dover MD FRCPC" },

	{ title: "Skin Cancer Sites Online: Watch Out for Red Flags",
	authors: "From Sun & Skin News, Vol. 20, No.2" },

	{ title: "Skin Cancer in Skin of Color: An Update on Current Facts, Trends, and Misconceptions", 
	authors: "Claire Battie PharmD,a Mona Gohara MD,b Michèle Verschoore MD,a and Wendy Roberts MDc" },

	{ title: "Therapeutic Implications of the Circadian Clock on Skin Function",
	authors: "Adam J. Luber BA, Shaheen H. Ensanyat BS, and Joshua A. Zeichner MD" },

	{ title: "Assessment of Skin Barrier Function in Rosacea Patients with a Novel 1% Metronidazole Gel",
	authors: "Zoe D. Draelos MDD" },

	{ title: "Population Education in Preventing Skin Cancer: From Childhood to Adulthood",
	authors: "Ellen RM de Haas LLM MD PhD, Tamar Nijsten MD PhD, Esther de Vries PhD" },

	{ title: "The Roberts Skin Type Classification System",
	authors: "Wendy E. Roberts MD" }
];


Template.searchResults.helpers({
	searchTerm: function() {
		$path = Router.current().path;
		pathArray = $path.split( "/" );
		return pathArray[pathArray.length - 1];
	},
	results: results
});

Template.homePage.rendered = function () {
	$.getScript( 'javascript/jdd.js');
	$.getScript( 'javascript/sidebar.js');
	$.getScript( 'javascript/nav.js');
};