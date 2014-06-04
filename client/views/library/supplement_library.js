var evenCt = 1;
var supplements = [
	{	title: "Treatment Options in Facial and Nonfacial Volumization: An Introduction to Poly-L-Lactic Acid",
		image: "13-4s_Cover_375_494.jpg",
		byline: "Restoring Facial Volume: The Growing Impact of Poly-L-Lactic Acid",
		teaser: "Soft tissue augmentation is an important option in aesthetic enhancement and continues to grow in popularity for a number of reasons, including its minimally invasive nature and ability to directly nullify volume loss associated with facial ageing. Cosmetic agents that replace collagen are effective tools for addressing volume loss, and among these poly-L-lactic acid (PLLA) carries great potential, acting to volumize soft tissue in a gradual, progressive, and predictable manner, and providing natural-looking restoration of lost facial volume."
	},
	{	title: "Treatment Options in Facial and Nonfacial Volumization: An Introduction to Poly-L-Lactic Acid",
		image: "13-1s_cover_375_494.jpg",
		byline: "New Technologies for the Rejuvenation of the Periorbital Region",
		teaser: "Soft tissue augmentation is an important option in aesthetic enhancement and continues to grow in popularity for a number of reasons, including its minimally invasive nature and ability to directly nullify volume loss associated with facial ageing. Cosmetic agents that replace collagen are effective tools for addressing volume loss, and among these poly-L-lactic acid (PLLA) carries great potential, acting to volumize soft tissue in a gradual, progressive, and predictable manner, and providing natural-looking restoration of lost facial volume."
	},
	{	title: "New Advances in the Topical Treatment of Tinea Pedis, Tinea Cruris, and Tinea Corporis",
		image: "12-11s_cover_130x170.jpg",
		byline: "Put Your Best Foot Forward: Advances in the Management of Tinea Pedis",
		teaser: "Dermatophyte infections account for over 4 million physician visits each year in the United States. Moreover, recent analysis of data from the National Ambulatory Medical Care Survey and National Hospital Ambulatory Medical Care Survey for the period from 1995 to 2004 have found that improper treatment of tinea pedis, tinea corporis, and tinea cruris is common and expensive. However, the selection of inappropriate agents is just one impediment to effective care. Therapeutic non-adherence by patients, and especially failure to continue therapy until the infectious organisms are completely eradicated, are additional challenges. Naftifine cream 2% is a topical allylamine antifungal agent for the treatment of superficial dermatomycoses, and this novel topical formulation is a welcome new option. A study of naftifine cream 2% for the treatment of tinea pedis found that 2 weeks of treatment was significantly more effective than vehicle and equivalent to 4 weeks of treatment with naftifine 1% gel. Naftifine 2% cream offers a cosmetically elegant, once-daily topical treatment option for dermatomycoses that may lead to better compliance and better treatment outcome in patients."
	},
	{	title: "Advanced Basal Cell Carcinoma: Therapeutic Options and Considerations for Patient Care",
		image: "12-10s_cover_130x170.jpg",
		byline: "Vismodegib Ushers in New Era for the Treatment of Basal Cell Carcinoma",
		teaser: "Approximately 2.8 million basal cell carcinomas (BCCs) occur in the United States each year, accounting for 80% of all non-melanoma skin cancers. Historically, BCCs that are not surgically resectable or candidates for radiation therapy have had few treatment options. However, the development of vismodegib and its approval by the United States Food and Drug Administration (FDA) for use in patients with locally advanced or metastatic BCC carries with it a renewed sense of hope. Vismodegib is the first oral medication approved by the FDA for adults with metastatic or locally advanced BCCs who are not candidates for surgery or radiation or for BCCs that have recurred after surgery. The overwhelming majority of BCCs are the result of hedgehog pathway activation, and vismodegib inhibits a key regulatory protein in the hedgehog pathway, resulting in response rates of between 30% to 60% for locally advanced and metastatic BCCs."
	},
	{	title: "Advances in Natural Ingredients and Their Use in Skin Care",
		image: "12-9s_cover_130x170.jpg",
		byline: "The Dermatologic Benefits of Back to Nature",
		teaser: "Natural supplements are currently experiencing a renaissance in dermatology. Although they have been used for centuries, many have been recently validated for various skin conditions by scientific studies. Natural supplements, such as mushroom extracts, are capable of accelerating the skin turnover rate and repairing dermal molecular components that provide structure and elasticity to the skin. Moreover, teas and feverfew have anti-inflammatory, anti-irritant, and antioxidant properties, and their applications include the treatment of sensitive skin, shaving-induced irritation or redness, and photoprotection. Dyschromia is one of the most common dermatological concerns in patients with darker skin, and blinded controlled studies have found that hyperpigmentation can be assuaged by the skin lightening effects of soy, niacinamide, n-acetylglucosamine, licorice extract, arbutin, vitamin c, kojic acid, emblica extract, lignin peroxidase, and glutathione. Blinded controlled studies have also demonstrated that atopic dermatitis can be mitigated by oatmeal, feverfew, chamomile, aloe vera, licorice, and dexpanthenol."
	},
	{	title: "A New Understanding of the Pathogenesis of Acne Vulgaris",
		image: "12-8s_cover_130x170.jpg",
		byline: "A New Treatment Paradigm for Acne Vulgaris",
		teaser: "The understanding of acne vulgaris (AV) has evolved with a greater recognition of the sequence of inflammation, especially prelesional inflammation. An important facet of the new paradigm is that a specific follicular pattern of innate inflammation occurs before and during follicular hyperkeratinization. Moreover, this inflammation persists during the resolution of the macular phase after inflammatory lesions flatten toward the end of their life cycle. The current understanding of AV pathogenesis presents novel therapeutic options for patients because the use of benzoyl peroxide and a topical retinoid suppresses several components of acne pathogenesis, including reduced follicular hyperkeratinization, decreased innate inflammation, and dermal matrix degradation."
	},
	{	title: "Onychomycosis: Art and Science",
		image: "12-7s2_cover_130x170.jpg",
		byline: "Efinaconazole is a Promising Treatment for Onychomycosis",
		teaser: "Onychomycosis is a fungal infection of the nail unit that is caused by a variety of fungi including dermatophytes, nondermatophyte molds, and Candida. Efinaconazole 10% solution is a new topical treatment for onychomycosis that has a broad spectrum of activity against dermatophyte, nondermatophyte, and numerous yeast species. In clinical trials of mild to moderate onychomycosis, mycologic and complete cure rates for efinaconazole are comparable to those seen with oral itraconazole. Efinaconazole may be an important primary medication for those patients for whom effective topical treatment would be ideal, and could also be used in combination with an oral agent, or with adjunct therapies such as lasers and debridement."
	},

	{	title: "The Stratum Corneum Revisited: A New Understanding of Its Role in Healthy and Diseased Skin",
		image: "Oct_Supplement.jpg",
		teaser: "This supplement to the Journal of Drugs in Dermatology seeks to advance our knowledge of the structure and function of the stratum corneum. Previously considered a \"static\" or unremarkable barrier, it has now attained new clinical importance in regards to its role in conditions such as atopic dermatitis and other cutaneous abnormalities. Dr. Brian Berman provides an insightful introduction to articles by Dr. James Q. Del Rosso and Dr. Jacquelyn Levin, as well as by Dr. Paul C. Contard, that discuss the role and relevance of the stratum corneum in today's dermatologic world."
	}
];

Template.supplementLibrary.helpers({
	supplements: supplements
});

Handlebars.registerHelper("isEven", function () {
	evenCt++;
	return evenCt%2;
});