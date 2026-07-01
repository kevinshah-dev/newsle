import type { Headline } from "@/types/headline";

const ARCHIVE_NAME = "Library of Congress / Chronicling America";

type SourceHeadline = Omit<Headline, "id" | "archiveName"> & {
  archiveName?: string;
};

const sourceHeadlines: SourceHeadline[] = [
  {
    headline: "SAN FRANCISCO DEVASTATED",
    publication: "New-York tribune",
    date: "1906-04-19",
    year: 1906,
    sourceUrl: "https://www.loc.gov/resource/sn83030214/1906-04-19/ed-1/?sp=1",
    pageImageUrl:
      "https://tile.loc.gov/image-services/iiif/service:ndnp:dlc:batch_dlc_canada_ver01:data:sn83030214:00175041412:1906041901:0404/full/pct:12.5/0/default.jpg",
    context:
      "The New-York Tribune reported the scale of the San Francisco earthquake damage the next morning.",
    category: "Disaster",
    difficulty: "medium",
  },
  {
    headline: "LUSITANIA TORPEDOED AND SUNK",
    publication: "Evening star",
    date: "1915-05-07",
    year: 1915,
    sourceUrl: "https://www.loc.gov/resource/sn83045462/1915-05-07/ed-1/?sp=1",
    pageImageUrl:
      "https://tile.loc.gov/image-services/iiif/service:ndnp:dlc:batch_dlc_ixtl_ver01:data:sn83045462:00280658649:1915050701:0700/full/pct:12.5/0/default.jpg",
    context:
      "The sinking of the Cunard liner Lusitania became a major flashpoint before U.S. entry into World War I.",
    category: "War",
    difficulty: "easy",
  },
  {
    headline: "ARMISTICE NOW SIGNED; HOSTILITIES HAVE ENDED",
    publication: "Harrisburg telegraph",
    date: "1918-11-11",
    year: 1918,
    sourceUrl: "https://www.loc.gov/resource/sn85038411/1918-11-11/ed-1/?sp=1",
    pageImageUrl:
      "https://tile.loc.gov/image-services/iiif/service:ndnp:pst:batch_pst_hershey_ver01:data:sn85038411:00296028320:1918111101:0277/full/pct:12.5/0/default.jpg",
    context:
      "This peace extra announced the armistice that ended fighting in World War I.",
    category: "War",
    difficulty: "easy",
  },
  {
    headline:
      "Nebraska, Last State Needed, Ratified Prohibition Amendment Today",
    publication: "The Washington times",
    date: "1919-01-16",
    year: 1919,
    sourceUrl: "https://www.loc.gov/resource/sn84026749/1919-01-16/ed-1/?sp=1",
    pageImageUrl:
      "https://tile.loc.gov/image-services/iiif/service:ndnp:dlc:batch_dlc_akita_ver02:data:sn84026749:00280764541:1919011601:0252/full/pct:12.5/0/default.jpg",
    context:
      "Nebraska's ratification supplied the final state needed for the Eighteenth Amendment.",
    category: "Politics",
    difficulty: "medium",
  },
  {
    headline: "LINDBERGH IS FLYING OVER FRENCH SOIL",
    publication: "Evening star",
    date: "1927-05-21",
    year: 1927,
    sourceUrl: "https://www.loc.gov/resource/sn83045462/1927-05-21/ed-1/?sp=1",
    pageImageUrl:
      "https://tile.loc.gov/image-services/iiif/service:ndnp:dlc:batch_dlc_hines_ver01:data:sn83045462:00280659721:1927052101:0592/full/pct:12.5/0/default.jpg",
    context:
      "Charles Lindbergh was nearing Paris during his solo transatlantic flight.",
    category: "Technology",
    difficulty: "easy",
  },
  {
    headline: "HINDENBURG DEATH LIST SET AT 30 AS PROBERS GATHER TO FIX CAUSE",
    publication: "Evening star",
    date: "1937-05-07",
    year: 1937,
    sourceUrl: "https://www.loc.gov/resource/sn83045462/1937-05-07/ed-1/?sp=1",
    pageImageUrl:
      "https://tile.loc.gov/image-services/iiif/service:ndnp:dlc:batch_dlc_1johns_ver01:data:sn83045462:00280601937:1937050701:0061/full/pct:12.5/0/default.jpg",
    context:
      "The Hindenburg disaster ended the public's confidence in hydrogen passenger airships.",
    category: "Disaster",
    difficulty: "easy",
  },
  {
    headline:
      "PRESIDENT SIGNS DECLARATION OF WAR; 350 CASUALTIES AS JAPS BLAST MANILA",
    publication: "Evening star",
    date: "1941-12-08",
    year: 1941,
    sourceUrl: "https://www.loc.gov/resource/sn83045462/1941-12-08/ed-1/?sp=1",
    pageImageUrl:
      "https://tile.loc.gov/image-services/iiif/service:ndnp:dlc:batch_dlc_1tatlin_ver01:data:sn83045462:00280603211:1941120801:0816/full/pct:12.5/0/default.jpg",
    context:
      "The United States declared war on Japan the day after the attack on Pearl Harbor.",
    category: "War",
    difficulty: "easy",
  },
  {
    headline: "Invasion's Progress Satisfies Churchill; Paratroopers Hailed",
    publication: "Evening star",
    date: "1944-06-06",
    year: 1944,
    sourceUrl: "https://www.loc.gov/resource/sn83045462/1944-06-06/ed-1/?sp=1",
    pageImageUrl:
      "https://tile.loc.gov/image-services/iiif/service:ndnp:dlc:batch_dlc_1quidor_ver01:data:sn83045462:00280603697:1944060601:0465/full/pct:12.5/0/default.jpg",
    context:
      "On D-Day, early Allied reports emphasized airborne landings and progress in Normandy.",
    category: "War",
    difficulty: "easy",
  },
  {
    headline: "JAPS ADMIT GREAT ATOMIC BOMB DAMAGE",
    publication: "Evening star",
    date: "1945-08-07",
    year: 1945,
    sourceUrl: "https://www.loc.gov/resource/sn83045462/1945-08-07/ed-1/?sp=1",
    pageImageUrl:
      "https://tile.loc.gov/image-services/iiif/service:ndnp:dlc:batch_dlc_1vuillard_ver01:data:sn83045462:00280604562:1945080701:0646/full/pct:12.5/0/default.jpg",
    context:
      "The day after Hiroshima, U.S. papers carried Japanese radio acknowledgments of atomic damage.",
    category: "War",
    difficulty: "easy",
  },
  {
    headline: "REDS REACH SEOUL AND DEMAND SURRENDER",
    publication: "Evening star",
    date: "1950-06-26",
    year: 1950,
    sourceUrl: "https://www.loc.gov/resource/sn83045462/1950-06-26/ed-1/?sp=1",
    pageImageUrl:
      "https://tile.loc.gov/image-services/iiif/service:ndnp:dlc:batch_dlc_2kandinsky_ver01:data:sn83045462:00280606364:1950062601:0191/full/pct:12.5/0/default.jpg",
    context:
      "The Korean War opened with North Korean forces driving rapidly toward Seoul.",
    category: "War",
    difficulty: "medium",
  },
  {
    headline: "Red Moon' Flies 18,000 M.P.H.",
    publication: "Evening star",
    date: "1957-10-05",
    year: 1957,
    sourceUrl: "https://www.loc.gov/resource/sn83045462/1957-10-05/ed-1/?sp=1",
    pageImageUrl:
      "https://tile.loc.gov/image-services/iiif/service:ndnp:dlc:batch_dlc_parsifal_ver01:data:sn83045462:00280607769:1957100501:0259/full/pct:12.5/0/default.jpg",
    context:
      "The Soviet launch of Sputnik made an artificial satellite front-page news worldwide.",
    category: "Science",
    difficulty: "medium",
  },
  {
    headline: "20 Red Ships Head for Cuba; Kremlin Sees Threat of War",
    publication: "Evening star",
    date: "1962-10-23",
    year: 1962,
    sourceUrl: "https://www.loc.gov/resource/sn83045462/1962-10-23/ed-1/?sp=1",
    pageImageUrl:
      "https://tile.loc.gov/image-services/iiif/service:ndnp:dlc:batch_dlc_jarmusch_ver01:data:sn83045462:00280608579:1962102301:0317/full/pct:12.5/0/default.jpg",
    context:
      "This appeared during the Cuban Missile Crisis as the U.S. quarantine began.",
    category: "World",
    difficulty: "easy",
  },
  {
    headline: "President Johnson Takes Over, Kennedy Lies in White House",
    publication: "Evening star",
    date: "1963-11-23",
    year: 1963,
    sourceUrl: "https://www.loc.gov/resource/sn83045462/1963-11-23/ed-1/?sp=1",
    pageImageUrl:
      "https://tile.loc.gov/image-services/iiif/service:ndnp:dlc:batch_dlc_lang_ver01:data:sn83045462:00280609225:1963112301:0153/full/pct:12.5/0/default.jpg",
    context:
      "The day after President Kennedy's assassination, papers covered both mourning and transition.",
    category: "Politics",
    difficulty: "easy",
  },
  {
    headline: "Killing Suspect Had Fired Gun, Tests Reveal",
    publication: "Evening star",
    date: "1963-11-23",
    year: 1963,
    sourceUrl: "https://www.loc.gov/resource/sn83045462/1963-11-23/ed-1/?sp=1",
    pageImageUrl:
      "https://tile.loc.gov/image-services/iiif/service:ndnp:dlc:batch_dlc_lang_ver01:data:sn83045462:00280609225:1963112301:0153/full/pct:12.5/0/default.jpg",
    context:
      "Early assassination coverage focused heavily on Lee Harvey Oswald and police evidence.",
    category: "Crime",
    difficulty: "medium",
  },
  {
    headline: "PETEY—Right Away Petey Pulls a Boner",
    publication: "Evening public ledger",
    date: "1917-09-08",
    year: 1917,
    sourceUrl: "https://www.loc.gov/resource/sn83045211/1917-09-08/ed-1/?sp=11",
    pageImageUrl:
      "https://tile.loc.gov/image-services/iiif/service:ndnp:pst:batch_pst_davey_ver01:data:sn83045211:0023728768A:1917090801:0807/full/pct:12.5/0/default.jpg",
    context:
      "A comic-strip headline preserved in Newspaper Navigator/Beyond Words visual-content data.",
    category: "Culture",
    difficulty: "hard",
  },
  {
    headline: "BLOODY SLOPES STORMED BY HUNS!",
    publication: "The Ogden standard",
    date: "1918-05-15",
    year: 1918,
    sourceUrl: "https://www.loc.gov/resource/sn85058396/1918-05-15/ed-1/?sp=6",
    pageImageUrl:
      "https://tile.loc.gov/image-services/iiif/service:ndnp:uuml:batch_uuml_julich_ver01:data:sn85058396:print:1918051501:0599/full/pct:12.5/0/default.jpg",
    context:
      "World War I coverage often used vivid language for fighting on the Western Front.",
    category: "War",
    difficulty: "medium",
  },
  {
    headline: "FIGHTING IN FRANCE Pictures Open Today at Orpheum",
    publication: "The Ogden standard",
    date: "1917-10-02",
    year: 1917,
    sourceUrl: "https://www.loc.gov/resource/sn85058396/1917-10-02/ed-1/?sp=4",
    pageImageUrl:
      "https://tile.loc.gov/image-services/iiif/service:ndnp:uuml:batch_uuml_indurain_ver01:data:sn85058396:print:1917100201:0013/full/pct:12.5/0/default.jpg",
    context:
      "War footage was promoted as public entertainment and patriotic instruction.",
    category: "Culture",
    difficulty: "hard",
  },
  {
    headline: "WOMEN TAKE PLACES OF MEN ON BALTIMORE & OHIO RAILROAD",
    publication: "The Ogden standard",
    date: "1917-05-18",
    year: 1917,
    sourceUrl: "https://www.loc.gov/resource/sn85058396/1917-05-18/ed-1/?sp=8",
    pageImageUrl:
      "https://tile.loc.gov/image-services/iiif/service:ndnp:uuml:batch_uuml_indurain_ver01:data:sn85058396:print:1917051801:0573/full/pct:12.5/0/default.jpg",
    context:
      "Wartime labor shortages opened railroad jobs to women in new operating roles.",
    category: "Business",
    difficulty: "medium",
  },
  {
    headline: "AS IRELAND LINES UP",
    publication: "The Ogden standard",
    date: "1918-03-08",
    year: 1918,
    sourceUrl: "https://www.loc.gov/resource/sn85058396/1918-03-08/ed-1/?sp=11",
    pageImageUrl:
      "https://tile.loc.gov/image-services/iiif/service:ndnp:uuml:batch_uuml_julich_ver01:data:sn85058396:print:1918030801:0834/full/pct:12.5/0/default.jpg",
    context:
      "The accompanying map explained Irish political alignments during the World War I era.",
    category: "World",
    difficulty: "hard",
  },
  {
    headline: 'American "Ace" Bags Ninth Enemy Plane',
    publication: "Harrisburg telegraph",
    date: "1918-05-20",
    year: 1918,
    sourceUrl: "https://www.loc.gov/resource/sn85038411/1918-05-20/ed-1/?sp=3",
    pageImageUrl:
      "https://tile.loc.gov/image-services/iiif/service:ndnp:pst:batch_pst_greenberg_ver01:data:sn85038411:00296028290:1918052001:0951/full/pct:12.5/0/default.jpg",
    context:
      "Aviation aces became recurring personalities in late World War I coverage.",
    category: "War",
    difficulty: "medium",
  },
  {
    headline: "FRENCH RESISTANCE BALKS FOE'S PLANS",
    publication: "Evening public ledger",
    date: "1918-06-13",
    year: 1918,
    sourceUrl: "https://www.loc.gov/resource/sn83045211/1918-06-13/ed-1/?sp=1",
    pageImageUrl:
      "https://tile.loc.gov/image-services/iiif/service:ndnp:pst:batch_pst_geary_ver01:data:sn83045211:00237282474:1918061301:0223/full/pct:12.5/0/default.jpg",
    context:
      "The Evening Public Ledger covered French resistance to German offensives in 1918.",
    category: "War",
    difficulty: "medium",
  },
  {
    headline:
      "MOVING FORWARD WITH THE INTREPID YANKEE DOUGHBOYS TOWARDS THE RHINE COUNTRY",
    publication: "Evening public ledger",
    date: "1918-10-29",
    year: 1918,
    sourceUrl: "https://www.loc.gov/resource/sn83045211/1918-10-29/ed-1/?sp=18",
    pageImageUrl:
      "https://tile.loc.gov/image-services/iiif/service:ndnp:pst:batch_pst_geary_ver01:data:sn83045211:0023728253A:1918102901:0504/full/pct:12.5/0/default.jpg",
    context:
      "Near the end of World War I, American soldiers were frequently called doughboys in headlines.",
    category: "War",
    difficulty: "medium",
  },
  {
    headline: "LUMBER FOR ARMY AND MERCHANT MARINE",
    publication: "The weekly tribune and the Cape County herald",
    date: "1917-08-17",
    year: 1917,
    sourceUrl: "https://www.loc.gov/resource/sn89066617/1917-08-17/ed-1/?sp=1",
    pageImageUrl:
      "https://tile.loc.gov/image-services/iiif/service:ndnp:mohi:batch_mohi_imogen_ver01:data:sn89066617:00200292315:1917081701:0117/full/pct:12.5/0/default.jpg",
    context:
      "Wartime mobilization turned materials like lumber into national supply-chain news.",
    category: "Business",
    difficulty: "hard",
  },
  {
    headline: "JEWS ARE ZEALOUS TO ENLIST FOR PALESTINE SERVICE WITH BRITISH",
    publication: "Harrisburg telegraph",
    date: "1918-05-20",
    year: 1918,
    sourceUrl: "https://www.loc.gov/resource/sn85038411/1918-05-20/ed-1/?sp=3",
    pageImageUrl:
      "https://tile.loc.gov/image-services/iiif/service:ndnp:pst:batch_pst_greenberg_ver01:data:sn85038411:00296028290:1918052001:0951/full/pct:12.5/0/default.jpg",
    context:
      "This World War I item referenced Jewish enlistment for British service in Palestine.",
    category: "World",
    difficulty: "hard",
  },
  {
    headline: "THE NATION'S GOING DRY.",
    publication: "The Holt County sentinel",
    date: "1917-06-01",
    year: 1917,
    sourceUrl: "https://www.loc.gov/resource/sn90061417/1917-06-01/ed-1/?sp=4",
    pageImageUrl:
      "https://tile.loc.gov/image-services/iiif/service:ndnp:mohi:batch_mohi_berenice_ver01:data:sn90061417:00200292777:1917060101:0493/full/pct:12.5/0/default.jpg",
    context:
      "Prohibition politics were already headline material before national ratification.",
    category: "Politics",
    difficulty: "hard",
  },
  {
    headline: "SOLDIERS IN THE VERDUN SECTOR REPAIRING A RUINED CANAL.",
    publication: "Mansfield mirror",
    date: "1917-10-25",
    year: 1917,
    sourceUrl: "https://www.loc.gov/resource/sn89066901/1917-10-25/ed-1/?sp=3",
    pageImageUrl:
      "https://tile.loc.gov/image-services/iiif/service:ndnp:mohi:batch_mohi_eeyore_ver01:data:sn89066901:00294556187:1917102501:0677/full/pct:12.5/0/default.jpg",
    context:
      "Verdun remained a potent symbol of the Western Front after the 1916 battle.",
    category: "War",
    difficulty: "hard",
  },
  {
    headline: "SCENES OF TODAY ON GETTYSBURG'S HISTORIC BATTLE GROUND",
    publication: "The Ogden standard",
    date: "1917-08-02",
    year: 1917,
    sourceUrl: "https://www.loc.gov/resource/sn85058396/1917-08-02/ed-1/?sp=7",
    pageImageUrl:
      "https://tile.loc.gov/image-services/iiif/service:ndnp:uuml:batch_uuml_indurain_ver01:data:sn85058396:print:1917080201:0344/full/pct:12.5/0/default.jpg",
    context:
      "Gettysburg imagery connected Civil War memory to the World War I home front.",
    category: "Culture",
    difficulty: "hard",
  },
  {
    headline: "WINTER, RUSSIA'S SILENT PARTNER",
    publication: "Evening public ledger",
    date: "1917-10-19",
    year: 1917,
    sourceUrl: "https://www.loc.gov/resource/sn83045211/1917-10-19/ed-1/?sp=22",
    pageImageUrl:
      "https://tile.loc.gov/image-services/iiif/service:ndnp:pst:batch_pst_davey_ver01:data:sn83045211:00237287678:1917101901:0590/full/pct:12.5/0/default.jpg",
    context:
      "This headline played on the old military idea that Russian winter itself shaped campaigns.",
    category: "World",
    difficulty: "hard",
  },
  {
    headline: "TILLMAN, FIERY SOUTH CAROLINA SENATOR, IS DEAD",
    publication: "Harrisburg Telegraph",
    date: "1918-07-03",
    year: 1918,
    sourceUrl: "https://www.loc.gov/resource/sn85038411/1918-07-03/ed-1/?sp=8",
    pageImageUrl:
      "https://tile.loc.gov/image-services/iiif/service:ndnp:pst:batch_pst_greenberg_ver01:data:sn85038411:00296028307:1918070301:0467/full/pct:12.5/0/default.jpg",
    context:
      "Comic panels and illustrated features often ran beside wartime headlines.",
    category: "Culture",
    difficulty: "hard",
  },
  {
    headline: "EDDIE PLANK IN THE BOX",
    publication: "Harrisburg telegraph",
    date: "1918-06-01",
    year: 1918,
    sourceUrl: "https://www.loc.gov/resource/sn85038411/1918-06-01/ed-1/?sp=11",
    pageImageUrl:
      "https://tile.loc.gov/image-services/iiif/service:ndnp:pst:batch_pst_greenberg_ver01:data:sn85038411:00296028307:1918060101:0077/full/pct:12.5/0/default.jpg",
    context:
      "Eddie Plank, a Hall of Fame pitcher, still drew sports-page attention in 1918.",
    category: "Sports",
    difficulty: "hard",
  },
  {
    headline: 'COULDN\'T "KID" THE ARMY',
    publication: "Evening public ledger",
    date: "1918-09-03",
    year: 1918,
    sourceUrl: "https://www.loc.gov/resource/sn83045211/1918-09-03/ed-1/?sp=17",
    pageImageUrl:
      "https://tile.loc.gov/image-services/iiif/service:ndnp:pst:batch_pst_geary_ver01:data:sn83045211:00237282504:1918090301:0711/full/pct:12.5/0/default.jpg",
    context:
      "A wartime comic headline from the Evening Public Ledger's illustrated pages.",
    category: "Culture",
    difficulty: "hard",
  },
  {
    headline: "CLOSING OF STOCK EXCHANGE FOR TWO DAYS",
    publication: "Evening Star",
    date: "1929-10-30",
    year: 1929,
    sourceUrl:
      "https://www.loc.gov/resource/sn83045462/1929-10-30/ed-1/?sp=1&q=stock+market+crash+stocks",
    pageImageUrl:
      "https://tile.loc.gov/image-services/iiif/service:ndnp:dlc:batch_dlc_morton_ver01:data:sn83045462:00280659976:1929103001:0500/full/pct:3.125/0/default.jpg",
    context:
      "Newspapers covered the Wall Street crash as stock prices collapsed and panic spread through financial markets.",
    category: "Business",
    difficulty: "easy",
  },
  {
    headline: "THE PRO-SLAVERY WAR,",
    publication: "New-York daily tribune (New-York [N.Y.])",
    date: "1861-04-15",
    year: 1861,
    sourceUrl:
      "https://www.loc.gov/resource/sn83030213/1861-04-15/ed-1/?sp=5&q=fort+sumter+surrendered+bombardment",
    pageImageUrl:
      "https://tile.loc.gov/image-services/iiif/service:ndnp:dlc:batch_dlc_alice_ver02:data:sn83030213:00206530674:1861041501:0715/full/pct:3.125/0/default.jpg",
    context:
      "Newspapers reported the bombardment and surrender of Fort Sumter at the opening of the Civil War.",
    category: "War",
    difficulty: "easy",
  },
  {
    headline: "THE SURRENDER OF FORT SUMTER.",
    publication: "Daily national intelligencer (Washington City [D.C.])",
    date: "1861-04-15",
    year: 1861,
    sourceUrl:
      "https://www.loc.gov/resource/sn83026172/1861-04-15/ed-1/?sp=3&q=fort+sumter+surrendered+bombardment",
    pageImageUrl:
      "https://tile.loc.gov/image-services/iiif/service:ndnp:dlc:batch_dlc_anderson_ver01:data:sn83026172:00211678343:1861041501:0347/full/pct:3.125/0/default.jpg",
    context:
      "Newspapers reported the bombardment and surrender of Fort Sumter at the opening of the Civil War.",
    category: "War",
    difficulty: "easy",
  },
  {
    headline: "SITTING BULL: Autobiography of the Napoleon of the Sioux",
    publication: "The New York herald (New York [N.Y.])",
    date: "1876-07-12",
    year: 1876,
    sourceUrl:
      "https://www.loc.gov/resource/sn83030313/1876-07-12/ed-1/?sp=3&q=custer+massacre",
    pageImageUrl:
      "https://tile.loc.gov/image-services/iiif/service:ndnp:dlc:batch_dlc_crowfoot_ver01:data:sn83030313:00271743981:1876071201:0130/full/pct:3.125/0/default.jpg",
    context:
      "News of George Armstrong Custer's defeat at Little Bighorn spread by telegraph days after the battle.",
    category: "War",
    difficulty: "medium",
  },
  {
    headline: "Garfield Shot",
    publication: "Public ledger (Memphis, Tenn.)",
    date: "1881-07-02",
    year: 1881,
    sourceUrl:
      "https://www.loc.gov/resource/sn85033673/1881-07-02/ed-1/?sp=1&q=garfield+shot",
    pageImageUrl:
      "https://tile.loc.gov/image-services/iiif/service:ndnp:tu:batch_tu_brownie_ver01:data:sn85033673:00280779490:1881070201:0620/full/pct:6.25/0/default.jpg",
    context:
      "Newspapers reported the shooting of President James A. Garfield at a Washington railroad station.",
    category: "Crime",
    difficulty: "medium",
  },
  {
    headline: "United States Battleship Maine Blown Up",
    publication: "San Antonio daily light (San Antonio, Tex.)",
    date: "1898-02-16",
    year: 1898,
    sourceUrl:
      "https://www.loc.gov/resource/sn86090439/1898-02-16/ed-1/?sp=1&q=maine+blown+up+havana",
    pageImageUrl:
      "https://tile.loc.gov/image-services/iiif/service:ndnp:txdn:batch_txdn_frisco_ver01:data:sn86090439:00517175134:1898021601:0362/full/pct:6.25/0/default.jpg",
    context:
      "The explosion of the USS Maine in Havana Harbor became a major prelude to the Spanish-American War.",
    category: "Disaster",
    difficulty: "easy",
  },
  {
    headline:
      "The retirement of General Washington, ascertains and eternizes his character",
    publication:
      "The New-Hampshire gazette and general advertiser (Portsmouth [N.H.])",
    date: "1783-12-06",
    year: 1783,
    sourceUrl:
      "https://www.loc.gov/resource/sn83025585/1783-12-06/ed-1/?sp=1&q=definitive+treaty+peace",
    pageImageUrl:
      "https://tile.loc.gov/image-services/iiif/service:ndnp:nhd:batch_nhd_bondcliff_ver01:data:sn83025585:00517015118:1783120601:0471/full/pct:3.125/0/default.jpg",
    context:
      "Newspapers reported peace terms after the Treaty of Paris formally ended the American Revolutionary War.",
    category: "World",
    difficulty: "hard",
  },
  {
    headline: "1492 DEAD - LIFE BOATS MIGHT HAVE SAVED EVERY VICTIM",
    publication: "The Tacoma times (Tacoma, Wash.)",
    date: "1912-04-16",
    year: 1912,
    sourceUrl:
      "https://www.loc.gov/resource/sn88085187/1912-04-16/ed-1/?sp=1&q=titanic+sunk",
    pageImageUrl:
      "https://tile.loc.gov/image-services/iiif/service:ndnp:wa:batch_wa_elm_ver01:data:sn88085187:00211108320:1912041601:0962/full/pct:6.25/0/default.jpg",
    context:
      "Newspapers reported the sinking of the Titanic while early passenger and survivor details were still uncertain.",
    category: "Disaster",
    difficulty: "easy",
  },
  {
    headline: "PRESIDENT McKINLEY IS RESTING QUIETLY",
    publication: "Rawlins Republican (Rawlins, Wyo.)",
    date: "1901-09-07",
    year: 1901,
    sourceUrl:
      "https://www.loc.gov/resource/sn92067236/1901-09-07/ed-1/?sp=1&q=mckinley+shot",
    pageImageUrl:
      "https://tile.loc.gov/image-services/iiif/service:ndnp:wyu:batch_wyu_hartville_ver01:data:sn92067236:00514150539:1901090701:1253/full/pct:12.5/0/default.jpg",
    context:
      "Newspapers followed the shooting of President William McKinley at the Pan-American Exposition in Buffalo.",
    category: "Crime",
    difficulty: "medium",
  },
  {
    headline: "LOSS OF THE SHUTTLE: THE OVERVIEW; SHUTTLE BREAKS UP, 7 DEAD",
    publication: "New York Times",
    date: "2003-02-02",
    year: 2003,
    sourceUrl:
      "https://www.nytimes.com/2003/02/02/us/loss-of-the-shuttle-the-overview-shuttle-breaks-up-7-dead.html",
    archiveName: "New York Times",
    context:
      "The Space Shuttle Columbia broke apart during atmospheric re-entry, killing all seven crew members.",
    category: "Disaster",
    difficulty: "easy",
  },
  {
    headline: "Blasts at Boston Marathon Kill 3 and Injure 100",
    publication: "New York Times",
    date: "2013-04-16",
    year: 2013,
    sourceUrl:
      "https://www.nytimes.com/2013/04/16/us/explosions-reported-at-site-of-boston-marathon.html",
    archiveName: "New York Times",
    context:
      "Two bombs detonated near the Boston Marathon finish line, killing three people and injuring hundreds more.",
    category: "Crime",
    difficulty: "medium",
  },
  {
    headline:
      "Reagan Wounded by Assailant's Bullet; Prognosis Is 'Excellent'; 3 Others Shot",
    publication: "The Washington Post",
    date: "1981-03-31",
    year: 1981,
    sourceUrl:
      "https://www.washingtonpost.com/local/reagan-wounded-by-assailants-bullet-prognosis-is-excellent-3-others-shot/2011/12/09/gIQAVusviO_story.html",
    archiveName: "The Washington Post",
    context:
      "The Washington Post republished its original coverage of the assassination attempt on President Ronald Reagan.",
    category: "Crime",
    difficulty: "medium",
  },
  {
    headline: "Apple Introduces Innovative Cellphone",
    publication: "New York Times",
    date: "2007-01-10",
    year: 2007,
    sourceUrl: "https://www.nytimes.com/2007/01/10/technology/10apple.html",
    archiveName: "New York Times",
    context:
      "Apple's first iPhone announcement reshaped consumer expectations for mobile phones.",
    category: "Technology",
    difficulty: "easy",
  },
  {
    headline: "Obama Elected President as Racial Barrier Falls",
    publication: "New York Times",
    date: "2008-11-05",
    year: 2008,
    sourceUrl: "https://www.nytimes.com/2008/11/05/us/politics/05elect.html",
    archiveName: "New York Times",
    context:
      "Barack Obama became the first Black president-elect of the United States.",
    category: "Politics",
    difficulty: "easy",
  },
  {
    headline: "Lehman Files for Biggest Bankruptcy in U.S. After Suitors Balk",
    publication: "Bloomberg",
    date: "2008-09-15",
    year: 2008,
    sourceUrl:
      "https://www.bloomberg.com/news/articles/2008-09-15/lehman-files-for-biggest-bankruptcy-in-u-s-after-suitors-balk",
    archiveName: "Bloomberg",
    context:
      "Lehman Brothers' collapse became a defining event of the global financial crisis.",
    category: "Business",
    difficulty: "easy",
  },
  {
    headline: "NASA Confirms Evidence That Liquid Water Flows on Today's Mars",
    publication: "NASA",
    date: "2015-09-28",
    year: 2015,
    sourceUrl:
      "https://www.nasa.gov/news-release/nasa-confirms-evidence-that-liquid-water-flows-on-todays-mars/",
    archiveName: "NASA",
    context:
      "NASA announced evidence that salty liquid water flows intermittently on present-day Mars.",
    category: "Science",
    difficulty: "medium",
  },
  {
    headline: "Supreme Court Declares Same-Sex Marriage Legal In All 50 States",
    publication: "NPR",
    date: "2015-06-26",
    year: 2015,
    sourceUrl:
      "https://www.npr.org/sections/thetwo-way/2015/06/26/417717613/supreme-court-rules-all-states-must-allow-same-sex-marriages",
    archiveName: "NPR",
    context:
      "The Supreme Court's Obergefell decision required states to license and recognize same-sex marriages.",
    category: "Politics",
    difficulty: "easy",
  },
  {
    headline: "It happened! Cubs win epic Game 7 to end Series drought",
    publication: "Associated Press",
    date: "2016-11-03",
    year: 2016,
    sourceUrl:
      "https://apnews.com/general-news-ac4871e46f804b419784b963cedc19c9",
    archiveName: "AP News",
    context:
      "The Chicago Cubs won their first World Series championship since 1908.",
    category: "Sports",
    difficulty: "easy",
  },
  {
    headline:
      "Amazon to buy Whole Foods Market in deal valued at $13.7 billion",
    publication: "The Washington Post",
    date: "2017-06-16",
    year: 2017,
    sourceUrl:
      "https://www.washingtonpost.com/news/business/wp/2017/06/16/amazon-to-buy-whole-foods-market-in-deal-valued-at-13-7-billion-2/",
    archiveName: "The Washington Post",
    context:
      "Amazon's acquisition of Whole Foods expanded the company's reach into physical grocery retail.",
    category: "Business",
    difficulty: "medium",
  },
  {
    headline:
      "'Black Panther' Smashes Box Office Records with $218 Million Opening",
    publication: "Variety",
    date: "2018-02-18",
    year: 2018,
    sourceUrl:
      "https://variety.com/2018/film/box-office/black-panther-record-opening-box-office-1202703676/",
    archiveName: "Variety",
    context:
      "The Marvel film's opening weekend became a major commercial and cultural milestone.",
    category: "Culture",
    difficulty: "medium",
  },
  {
    headline: "Hollywood Celebrates 'Parasite' Historic Oscar Best Picture Win",
    publication: "Variety",
    date: "2020-02-10",
    year: 2020,
    sourceUrl:
      "https://variety.com/2020/film/box-office/parasite-oscars-best-picture-hollywood-reacts-1203498793/",
    archiveName: "Variety",
    context:
      "Bong Joon Ho's film became the first non-English-language movie to win the best picture Oscar.",
    category: "Culture",
    difficulty: "medium",
  },
  {
    headline: "Coronavirus: COVID-19 Is Now Officially A Pandemic, WHO Says",
    publication: "NPR",
    date: "2020-03-11",
    year: 2020,
    sourceUrl:
      "https://www.npr.org/sections/goatsandsoda/2020/03/11/814474930/coronavirus-covid-19-is-now-officially-a-pandemic-who-says",
    archiveName: "NPR",
    context:
      "The World Health Organization characterized the COVID-19 outbreak as a global pandemic.",
    category: "Science",
    difficulty: "easy",
  },
  {
    headline: "Biden defeats Trump for White House, says 'time to heal'",
    publication: "Associated Press",
    date: "2020-11-08",
    year: 2020,
    sourceUrl:
      "https://apnews.com/article/joe-biden-wins-white-house-ap-fd58df73aa677acb74fce2a69adb71f9",
    archiveName: "AP News",
    context:
      "The Associated Press called the presidential election for Joe Biden after days of vote counting.",
    category: "Politics",
    difficulty: "easy",
  },
  {
    headline: "NASA's Perseverance Rover Lands Successfully on Mars",
    publication: "NASA",
    date: "2021-02-18",
    year: 2021,
    sourceUrl:
      "https://science.nasa.gov/resource/nasas-perseverance-rover-lands-successfully-on-mars/",
    archiveName: "NASA",
    context:
      "The Perseverance rover touched down in Jezero Crater to search for signs of ancient microbial life.",
    category: "Science",
    difficulty: "medium",
  },
  {
    headline: "Jury's swift verdict for Chauvin in Floyd death: Guilty",
    publication: "Associated Press",
    date: "2021-04-21",
    year: 2021,
    sourceUrl:
      "https://apnews.com/article/derek-chauvin-convicted-george-floyd-killing-d93d1f9fc61a5261e179240dc16924dc",
    archiveName: "AP News",
    context:
      "Former Minneapolis police officer Derek Chauvin was convicted in George Floyd's murder.",
    category: "Crime",
    difficulty: "medium",
  },
  {
    headline: "Taliban sweep into Afghan capital after government collapses",
    publication: "Associated Press",
    date: "2021-08-16",
    year: 2021,
    sourceUrl:
      "https://apnews.com/article/afghanistan-taliban-kabul-bagram-e1ed33fe0c665ee67ba132c51b8e32a5",
    archiveName: "AP News",
    context:
      "The Taliban entered Kabul as Afghanistan's U.S.-backed government fell.",
    category: "War",
    difficulty: "medium",
  },
  {
    headline: "Death toll of powerful earthquake in Haiti soars to 1,297",
    publication: "Associated Press",
    date: "2021-08-16",
    year: 2021,
    sourceUrl:
      "https://apnews.com/article/haiti-earthquake-98f06a322e12f732f94485238d13558c",
    archiveName: "AP News",
    context:
      "A major earthquake struck Haiti's Tiburon Peninsula and caused widespread damage.",
    category: "Disaster",
    difficulty: "medium",
  },
  {
    headline: "Facebook just revealed its new name: Meta",
    publication: "The Verge",
    date: "2021-10-28",
    year: 2021,
    sourceUrl:
      "https://www.theverge.com/2021/10/28/22745234/facebook-new-name-meta-metaverse-zuckerberg-rebrand",
    archiveName: "The Verge",
    context:
      "Facebook renamed its parent company Meta as Mark Zuckerberg emphasized metaverse products.",
    category: "Technology",
    difficulty: "easy",
  },
  {
    headline: "Russia attacks Ukraine as defiant Putin warns US, NATO",
    publication: "Associated Press",
    date: "2022-02-24",
    year: 2022,
    sourceUrl:
      "https://apnews.com/article/russia-ukraine-europe-russia-moscow-kyiv-626a8c5ec22217bacb24ece60fac4fe1",
    archiveName: "AP News",
    context:
      "Russia launched a large-scale invasion of Ukraine after months of military buildup.",
    category: "War",
    difficulty: "easy",
  },
  {
    headline: "NASA's Webb Delivers Deepest Infrared Image of Universe Yet",
    publication: "NASA",
    date: "2022-07-12",
    year: 2022,
    sourceUrl:
      "https://science.nasa.gov/missions/webb/nasas-webb-delivers-deepest-infrared-image-of-universe-yet/",
    archiveName: "NASA",
    context:
      "The James Webb Space Telescope released its first deep-field image of distant galaxies.",
    category: "Science",
    difficulty: "medium",
  },
  {
    headline: "Queen Elizabeth dead at 96 after more than 7 decades on throne",
    publication: "Associated Press",
    date: "2022-09-08",
    year: 2022,
    sourceUrl:
      "https://apnews.com/article/queen-elizabeth-ii-health-update-b2578aa91c3fef9c5d6ad4a557bf63e4",
    archiveName: "AP News",
    context:
      "Queen Elizabeth II died after the longest reign in British history.",
    category: "World",
    difficulty: "easy",
  },
  {
    headline: "Messi wins World Cup, Argentina beats France on penalties",
    publication: "Associated Press",
    date: "2022-12-18",
    year: 2022,
    sourceUrl:
      "https://apnews.com/article/lionel-messi-argentina-win-world-cup-final-against-france-e13fc1886725a0fe4f9e053e16a061bc",
    archiveName: "AP News",
    context:
      "Argentina defeated France in a shootout after a dramatic World Cup final.",
    category: "Sports",
    difficulty: "easy",
  },
  {
    headline:
      "Taylor Swift's 'The Eras Tour' Becomes Highest-Grossing Concert Film",
    publication: "Variety",
    date: "2024-01-08",
    year: 2024,
    sourceUrl:
      "https://variety.com/2024/film/news/taylor-swifts-the-eras-tour-highest-grossing-theatrical-concert-film-1235863956/",
    archiveName: "Variety",
    context:
      "The concert film broke theatrical box-office records for its genre.",
    category: "Culture",
    difficulty: "medium",
  },
];

export const headlines: Headline[] = sourceHeadlines.map((headline, index) => ({
  ...headline,
  id: `headline-${String(index + 1).padStart(3, "0")}`,
  archiveName: headline.archiveName ?? ARCHIVE_NAME,
}));
