var articleTeasers = [
	{ title: "What Is New in Fungal Pharmacotherapeutics?",
	topic: "Insurance",
	teaser: "ABSTRACT: Approximately 20-25% of the population worldwide is affected by perficial cutaneous mycoses (SCM).SCM are cutaneous fungal infections with a wide array of systemic and topical treatment options."
	},
	{ title: "Principles of Topical Treatment: Advancement in Gel Vehicle Technology",
	topic: "Insurance",
	teaser: "ABSTRACT: Approximately 20-25% of the population worldwide is affected by superficial cutaneous mycoses (SCM).SCM are cutaneous fungal infections with a wide array of systemic."
	},
	{ title: "The Skin Health and Beauty Pyramid: A Clinically Based Guide to Selecting...",
	topic: "Insurance",
	teaser: "ABSTRACT: Approximately 20-25% of the population worldwide is affected by superficial cutaneous mycoses (SCM).SCM are cutaneous fungal infections with a wide array of systemic"
	},

	{ title: "What Is New in Fungal Pharmacotherapeutics?",
	topic: "Insurance",
	teaser: "ABSTRACT: Approximately 20-25% of the population worldwide is affected by perficial cutaneous mycoses (SCM).SCM are cutaneous fungal infections with a wide array of systemic and topical treatment options."
	},
	{ title: "Principles of Topical Treatment: Advancement in Gel Vehicle Technology",
	topic: "Insurance",
	teaser: "ABSTRACT: Approximately 20-25% of the population worldwide is affected by superficial cutaneous mycoses (SCM).SCM are cutaneous fungal infections with a wide array of systemic."
	},
	{ title: "The Skin Health and Beauty Pyramid: A Clinically Based Guide to Selecting...",
	topic: "Insurance",
	teaser: "ABSTRACT: Approximately 20-25% of the population worldwide is affected by superficial cutaneous mycoses (SCM).SCM are cutaneous fungal infections with a wide array of systemic"
	}
];

Template.fedArticle.helpers({
	topic: "Acne",
	articleTeasers: function() {
		for(var i = 0; i < articleTeasers.length; i++) {
			articleTeasers[i].index = i+1;
			(articleTeasers[i].index%3) ? 
				articleTeasers[i].third = 0: articleTeasers[i].third = 1;
		}
		return articleTeasers;
	}
});

Template.fedArticle.rendered = function () {
	$.getScript( 'javascript/jdd.js');
	$.getScript( 'javascript/sidebar.js');
	$.getScript( 'javascript/nav.js');
	$.getScript( 'javascript/article_helper.js');
};