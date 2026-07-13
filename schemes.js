// ===========================================================================
// ArthNari — scheme data + UI strings (bilingual hi/en)
// Content sources (Riddhima's documents, received 04 Jul 2026):
//   - Arthnari_Questionnaire_Corrected.pdf  (finder logic — implemented 1:1)
//   - Government_Schemes_for_Women_2026.pdf (all scheme facts below)
//   - Arthnari_Research_Report.pdf          (About / Mission / Impact)
// Hindi copy: DRAFT by EnsoGuild, pending Riddhima's verification (content is
// hers per SoW §5). Nothing below is invented; gaps are marked [CONFIRM].
//
// INSURANCE SWITCH: settled OFF by the 05 Jul meeting ("remove PMSBY/PMJJBY
// from v1" — session-notes/2026-07-05-riddhima-session-2-gemini.md). The data
// stays below so v1.1 can re-enable with this one flag.
// ===========================================================================
const INCLUDE_INSURANCE = false;

// ---------------------------------------------------------------------------
// UI strings
// ---------------------------------------------------------------------------
const STR = {
  tag:        {hi:'अपना हक़ जानिए, अपनी योजना पहचानिए', en:'Know your rights, find your scheme'},
  brandline:  {hi:'Access. Ability. Agency.', en:'Access. Ability. Agency.'},
  heroLead:   {hi:'सरकार की कई योजनाएँ आपके लिए बनी हैं — पर सही जानकारी आप तक पहुँचती नहीं। यहाँ कुछ आसान सवालों के जवाब दीजिए, और जानिए कौन-सी योजना आपके काम की है, उसमें क्या छिपी शर्तें हैं, और आवेदन कैसे करना है।',
               en:'Many government schemes are made for you — but the right information rarely reaches you. Answer a few simple questions and find out which schemes fit you, what fine print to watch, and exactly how to apply.'},
  startBtn:   {hi:'योजना खोजना शुरू करें', en:'Find my schemes'},
  menuAbout:  {hi:'परियोजना के बारे में', en:'About'},
  menuMission:{hi:'हमारा उद्देश्य', en:'Mission'},
  menuImpact: {hi:'असर (Impact)', en:'Impact'},
  menuSources:{hi:'स्रोत', en:'Sources'},

  // Finder
  hello:      {hi:'नमस्ते! 🙏 मैं आपकी मदद के लिए हूँ। कुछ छोटे सवालों के जवाब दीजिए — मैं बताऊँगी कि सरकार की कौन-सी योजनाएँ आपके काम की हैं। आपकी कोई निजी जानकारी कहीं नहीं जाती।',
               en:'Hello! 🙏 I am here to help. Answer a few small questions and I will show which government schemes can work for you. None of your answers leave this page.'},
  q1:         {hi:'आपकी उम्र कितनी है? (सालों में)', en:'What is your age? (in years)'},
  q1_ok:      {hi:'आगे बढ़ें', en:'Continue'},
  q2:         {hi:'क्या आपके अपने नाम का बैंक खाता है, जो आधार से जुड़ा है?', en:'Do you have a bank account in your own name, linked to Aadhaar?'},
  yes:        {hi:'हाँ', en:'Yes'},
  no:         {hi:'नहीं', en:'No'},
  notsure:    {hi:'पक्का नहीं पता', en:'Not sure'},
  q3:         {hi:'क्या आपके घर में कोई इनकम टैक्स (ITR) भरता है?', en:'Does anyone in your household pay income tax (file ITR)?'},
  q4:         {hi:'इनमें से जो-जो बातें आप पर लागू होती हैं, सब चुनिए —', en:'Which of these describe you right now? Select all that apply —'},
  q4_a:       {hi:'मेरी बेटी 10 साल या छोटी है', en:'I have a daughter aged 10 or under'},
  q4_b:       {hi:'मैं गर्भवती हूँ / नई माँ हूँ', en:'I am pregnant / a new mother'},
  q4_c:       {hi:'मैं पहले से कुछ कमाती हूँ', en:'I already earn an income'},
  q4_d:       {hi:'इनमें से कोई नहीं', en:'None of these'},
  q4_done:    {hi:'हो गया — आगे बढ़ें', en:'Done — continue'},
  q5:         {hi:'क्या आप खाते में कम-से-कम ₹500 रख सकती हैं, और मई खत्म होने से पहले पूरा नहीं निकालेंगी?',
               en:'Can you keep at least ₹500 in your account and avoid withdrawing it all before the end of May?'},
  q5_unsure:  {hi:'यह कैसे काम करता है, समझ नहीं आया', en:'Not sure how this works'},

  // Branch A — daughter
  q6:         {hi:'क्या आपकी बेटी का जन्म प्रमाण-पत्र (birth certificate) बना है?', en:'Does your daughter have a birth certificate?'},
  maybe:      {hi:'शायद / देखना पड़ेगा', en:'Maybe'},
  q7:         {hi:'क्या आप अगले कई सालों तक, साल में कम-से-कम ₹250 अलग रख सकती हैं?',
               en:'Can you set aside at least ₹250 once a year, for the next several years?'},
  q7_easy:    {hi:'हाँ, आराम से', en:'Yes, easily'},
  q7_tight:   {hi:'हाँ, पर खींचतान होगी', en:'Yes, but tight'},
  q7_notnow:  {hi:'अभी नहीं', en:'Not right now'},

  // Branch B — pregnant / new mom
  q8:         {hi:'यह आपका पहला बच्चा है या दूसरा?', en:'Is this your first child, or second?'},
  q8_first:   {hi:'पहला', en:'First'},
  q8_second:  {hi:'दूसरा', en:'Second'},
  q9:         {hi:'क्या दूसरा बच्चा बेटी है?', en:'Is the second child a girl?'},
  q10:        {hi:'क्या इनमें से कोई बात आप पर लागू होती है? (जो-जो लागू हो, चुनिए)',
               en:'Do any of these apply to you? (select all that apply)'},
  q10_scst:   {hi:'SC/ST वर्ग', en:'SC/ST category'},
  q10_bpl:    {hi:'BPL कार्ड', en:'BPL card'},
  q10_ayush:  {hi:'आयुष्मान भारत कार्ड', en:'Ayushman Bharat card'},
  q10_nrega:  {hi:'मनरेगा जॉब कार्ड', en:'MGNREGA job card'},
  q10_income: {hi:'घर की आय ₹8 लाख/साल से कम', en:'Household income under ₹8 lakh/year'},
  q10_unsure: {hi:'पक्का नहीं पता', en:'Not sure'},
  q11:        {hi:'क्या आपने अपने नज़दीकी आंगनवाड़ी केंद्र में पंजीकरण (registration) करा लिया है?',
               en:'Have you already registered at your local Anganwadi centre?'},

  // Branch C — earning
  q12:        {hi:'आप किस तरह का काम करती हैं?', en:'What kind of income activity do you currently run?'},
  q12_tailor: {hi:'सिलाई', en:'Tailoring'},
  q12_food:   {hi:'खाना / टिफ़िन', en:'Food & tiffin'},
  q12_kirana: {hi:'किराना दुकान', en:'Kirana shop'},
  q12_beauty: {hi:'ब्यूटी का काम', en:'Beauty work'},
  q12_veg:    {hi:'सब्ज़ी बेचना', en:'Vegetable vending'},
  q12_other:  {hi:'कुछ और', en:'Other'},
  q13a:       {hi:'आपको काम बढ़ाने के लिए लगभग कितने पैसों की ज़रूरत है? (₹ में)',
               en:'Roughly how much capital do you need? (in ₹)'},
  q13b:       {hi:'क्या अभी आप पर कोई और कर्ज़ चल रहा है? (बैंक, माइक्रोफाइनेंस या किसी और से)',
               en:'Do you already have another loan running? (bank, MFI, or informal)'},

  // Gate pop-up (bank/Aadhaar)
  gateTitle:  {hi:'⚠️ पहले ये दो चीज़ें ज़रूरी हैं', en:'⚠️ Two things are needed first'},
  gateBody:   {hi:'लगभग हर योजना के लिए (1) आपके अपने नाम का बैंक खाता और (2) उससे जुड़ा आधार ज़रूरी है।<br><br><strong>घबराइए नहीं — यह मुफ़्त और आसान है:</strong> आधार लेकर किसी भी बैंक जाइए और <strong>जन धन खाता</strong> खोलने को कहिए। कोई कम-से-कम रकम नहीं रखनी पड़ती, कोई फीस नहीं।',
               en:'Almost every scheme needs (1) a bank account in your own name and (2) Aadhaar linked to it.<br><br><strong>Don’t worry — this is free and simple:</strong> take your Aadhaar to any bank and ask to open a <strong>Jan Dhan account</strong>. No minimum balance, no fee.'},
  gateBodyNS: {hi:'कोई बात नहीं! पता करना आसान है: अपनी बैंक पासबुक देखिए या बैंक जाकर पूछिए — "क्या मेरा खाता आधार से जुड़ा है?" अगर खाता ही नहीं है, तो आधार लेकर <strong>जन धन खाता</strong> खुलवाइए — मुफ़्त, बिना कम-से-कम रकम के।',
               en:'No problem! It is easy to check: look at your bank passbook or ask at the branch — "Is my account linked to Aadhaar?" If you don’t have an account at all, open a free <strong>Jan Dhan account</strong> with just your Aadhaar.'},
  gateOk:     {hi:'समझ गई — आगे बढ़ें', en:'Got it — continue'},

  // Results
  results:    {hi:'आपके जवाबों के हिसाब से, ये योजनाएँ आपके काम की हैं 👇', en:'Based on your answers, these schemes can work for you 👇'},
  results0:   {hi:'इन जवाबों के हिसाब से अभी कोई योजना नहीं मिली। किसी सहायता-कार्यकर्ता (आंगनवाड़ी दीदी / पंचायत / NGO) से बात कीजिए — वे आगे का रास्ता बताएँगी।',
               en:'No matching scheme found for these answers. Please talk to a support worker (Anganwadi didi / panchayat / NGO) about next steps.'},
  openBtn:    {hi:'पूरी जानकारी देखें ↗', en:'See full details ↗'},
  stepZeroT:  {hi:'पहला कदम: जन धन खाता खोलिए', en:'Step zero: open a Jan Dhan account'},
  stepZeroB:  {hi:'आधार लेकर किसी भी बैंक जाइए और जन धन खाता खोलने को कहिए — मुफ़्त, बिना कम-से-कम रकम के। खाता खुलते ही नीचे दी गई योजनाएँ आपके लिए खुल जाती हैं।',
               en:'Take your Aadhaar to any bank and ask to open a Jan Dhan account — free, with no minimum balance. Once it opens, the schemes below open up for you.'},
  stepZeroChk:{hi:'पहला कदम: पता कीजिए कि खाता आधार से जुड़ा है या नहीं', en:'Step zero: check that your account is linked to Aadhaar'},
  stepZeroChkB:{hi:'बैंक पासबुक देखिए या बैंक में पूछिए। जुड़ा नहीं है तो बैंक उसी दिन जोड़ देता है — आधार साथ ले जाइए।',
               en:'Check your passbook or ask at the branch. If not linked, the bank can link it the same day — carry your Aadhaar.'},
  autoDebitT: {hi:'"मई के अंत" वाली बात समझिए', en:'About the "end of May" question'},
  autoDebitB: {hi:'बीमा और पेंशन योजनाओं की किस्त हर साल मई के अंत में खाते से <strong>अपने-आप</strong> कटती है। उस दिन खाते में पैसे न हों, तो योजना <strong>चुपचाप बंद</strong> हो जाती है — कोई फोन या चिट्ठी नहीं आती। इसलिए खाते में हमेशा थोड़े पैसे (₹500 तक) रखिए।',
               en:'Insurance and pension premiums are <strong>auto-debited</strong> from your account at the end of May every year. If the account is empty that day, the scheme <strong>lapses silently</strong> — nobody calls you. So always keep a small buffer (up to ₹500) in the account.'},
  pmmvyVerify:{hi:'आपने "पक्का नहीं पता" चुना — कोई बात नहीं। आंगनवाड़ी दीदी से मिलकर अपने कागज़ दिखाइए, वे बता देंगी कि आप पात्र हैं या नहीं।',
               en:'You chose "not sure" — that’s okay. Show your documents to the Anganwadi didi; she will confirm whether you qualify.'},
  anganwadiGo:{hi:'📍 अगला कदम: इसी हफ्ते अपने नज़दीकी आंगनवाड़ी केंद्र जाकर पंजीकरण कराइए — असली आवेदन वहीं होता है।',
               en:'📍 Next step: go to your nearest Anganwadi centre THIS WEEK and register — that is the actual enrollment step.'},
  anganwadiOk:{hi:'✅ आपका पंजीकरण हो चुका है — किस्तें आपकी जाँच/टीकाकरण पूरा होने पर खाते में आएँगी।',
               en:'✅ You are already registered — instalments arrive as your check-ups/vaccinations complete.'},
  mudraReview:{hi:'⚠️ आप पर पहले से एक कर्ज़ चल रहा है। नया लोन लेने से पहले अपनी आंगनवाड़ी दीदी / NGO सहायिका या नज़दीकी बैंक से ज़रूर बात कीजिए — वे आपके साथ बैठकर देख लेंगी कि नया कर्ज़ आपके लिए ठीक रहेगा या नहीं।',
               en:'⚠️ You already have a loan running. Before taking a new one, talk to your Anganwadi didi / NGO helper or your nearest bank — they will sit with you and check whether a new loan is right for you.'},
  mudraAsk:   {hi:'लोन का फ़ैसला अकेले मत कीजिए — आवेदन से पहले अपनी आंगनवाड़ी दीदी / NGO सहायिका या बैंक से बात कर लीजिए।',
               en:'Don’t decide on a loan alone — talk to your Anganwadi didi / NGO helper or the bank before applying.'},
  mudraRate:  {hi:'💡 हमेशा ब्याज दर पूछिए: बैंक का मुद्रा लोन 9–12.5% सालाना होता है; माइक्रोफाइनेंस/दरवाज़े पर मिलने वाला लोन 18–24% या ज़्यादा। और <strong>"एजेंट फीस" माँगने वाला हमेशा धोखेबाज़ होता है</strong> — मुद्रा लोन के लिए कोई फीस नहीं लगती।',
               en:'💡 Always ask the interest rate: bank Mudra loans run 9–12.5% a year; MFI/doorstep loans 18–24% or more. And <strong>anyone asking an "agent fee" is a scam</strong> — Mudra has no fee.'},
  mudraCap:   {hi:'ध्यान दें: शिशु मुद्रा लोन ₹50,000 तक मिलता है।', en:'Note: Shishu Mudra loans go up to ₹50,000.'},
  again:      {hi:'फिर से शुरू करें', en:'Start again'},
  free:       {hi:'मुफ़्त', en:'FREE'},

  // Scheme page
  formBtn:    {hi:'📄 फ़ॉर्म डाउनलोड करें', en:'📄 Download the form'},
  forWhomH:   {hi:'किसके लिए', en:'For whom'},
  acctH:      {hi:'खाता किसके नाम', en:'Account holder'},
  figuresH:   {hi:'मुख्य बातें एक नज़र में', en:'Key figures at a glance'},
  needsH:     {hi:'योजना के लिए क्या-क्या चाहिए', en:'Needs for the scheme'},
  disclaimerH:{hi:'⚠️ ध्यान रखिए (ज़रूरी बात)', en:'⚠️ DISCLAIMER — read this'},
  benefitH:   {hi:'फ़ायदे', en:'Benefits'},
  stepsH:     {hi:'आवेदन कैसे करें', en:'How to apply'},
  srcH:       {hi:'आधिकारिक स्रोत व मदद', en:'Official sources & help'},
  backHome:   {hi:'← योजना खोज पर वापस', en:'← Back to the scheme finder'},
  langBtn:    {hi:'English', en:'हिन्दी'},

  disclaimer: {hi:'यह वेबसाइट केवल जानकारी के लिए है। हम कोई खाता नहीं खोलते, कोई पैसा नहीं लेते, और आपकी कोई निजी जानकारी नहीं माँगते। आवेदन हमेशा बैंक, डाकघर, आंगनवाड़ी या सरकारी पोर्टल पर ही होता है।',
               en:'This website is for information only. We do not open accounts, take money, or ask for any personal details. Applications always happen at the bank, post office, Anganwadi, or an official government portal.'},
};

// ---------------------------------------------------------------------------
// Scheme data — facts from Government_Schemes_for_Women_2026.pdf (her guide)
// ---------------------------------------------------------------------------
const SCHEMES = {

  pmsby: {
    insurance:true, tier:1,
    name:   {hi:'पीएम सुरक्षा बीमा योजना (PMSBY)', en:'PM Suraksha Bima Yojana (PMSBY)'},
    short:  {hi:'साल के सिर्फ़ ₹20 में ₹2 लाख का दुर्घटना बीमा', en:'₹2 lakh accident cover for just ₹20 a year'},
    pitch:  {hi:'"बीस रुपये — एक ऑटो की सवारी से भी कम। दुर्घटना में कुछ हो जाए, तो परिवार को ₹2 लाख।"',
             en:'"Twenty rupees. Less than one auto ride. If anything happens to you in an accident, your family gets ₹2 lakh."'},
    forWhom:{hi:'18 से 70 साल की हर महिला जिसके नाम बचत खाता है (जन धन खाता भी चलता है)',
             en:'Every woman aged 18–70 with a savings account (Jan Dhan counts)'},
    acct:   {hi:'आपका अपना बचत खाता', en:'Your own savings account'},
    figures:[
      [{hi:'सालाना प्रीमियम', en:'Premium (annual)'},      {hi:'सिर्फ़ ₹20 — मई के अंत में अपने-आप कटता है', en:'₹20 only — auto-debited end of May'}],
      [{hi:'दुर्घटना में मृत्यु', en:'Accidental death'},   {hi:'₹2 लाख', en:'₹2 lakh'}],
      [{hi:'पूर्ण स्थायी विकलांगता', en:'Total permanent disability'}, {hi:'₹2 लाख', en:'₹2 lakh'}],
      [{hi:'आंशिक स्थायी विकलांगता', en:'Partial permanent disability'},{hi:'₹1 लाख', en:'₹1 lakh'}],
      [{hi:'उम्र', en:'Age eligible'},                      {hi:'18–70 साल', en:'18–70 years'}],
      [{hi:'क्या कवर नहीं है', en:'NOT covered'},           {hi:'बीमारी या स्वाभाविक मृत्यु — सिर्फ़ दुर्घटना कवर है', en:'Death from illness or natural causes — accidents only'}],
    ],
    needs:  [{hi:'आधार', en:'Aadhaar'},
             {hi:'अपने नाम का बचत खाता', en:'A savings account in your name'},
             {hi:'खाते में हमेशा ₹25+ (मई के डेबिट के लिए)', en:'Always ₹25+ in the account (for the May debit)'}],
    disclaimer:{hi:'डेबिट वाले दिन (मई के अंत) खाते में ₹0 हुआ, तो बीमा <strong>चुपचाप बंद</strong> हो जाता है। कोई फोन नहीं आता, कोई चिट्ठी नहीं। खाते में हमेशा ₹25 से ज़्यादा रखिए।',
             en:'If your account has ₹0 on the debit day (end of May), your cover <strong>lapses silently</strong>. Nobody calls. Keep a ₹25+ buffer in your account always.'},
    steps:  [{hi:'आधार लेकर अपनी बैंक शाखा जाइए', en:'Visit your bank branch with Aadhaar'},
             {hi:'एक पेज का PMSBY फ़ॉर्म भरिए (नाम, खाता, नॉमिनी)', en:'Fill the one-page PMSBY form (name, account, nominee)'},
             {hi:'दस्तख़त या अँगूठा लगाइए', en:'Sign / thumbprint'},
             {hi:'बस! ₹20 कटेगा और SMS आ जाएगा', en:'Done. ₹20 debited, SMS confirmation sent'}],
    form:   'forms/pmsby-form.pdf',
    sources:[{label:'PMSBY हेल्पलाइन / Helpline: 1800-180-1111, 1800-110-001', url:null},
             {label:'Jan Suraksha (official)', url:'https://jansuraksha.gov.in'}],
  },

  pmjjby: {
    insurance:true, tier:1,
    name:   {hi:'पीएम जीवन ज्योति बीमा योजना (PMJJBY)', en:'PM Jeevan Jyoti Bima Yojana (PMJJBY)'},
    short:  {hi:'₹1.20 रोज़ में ₹2 लाख का जीवन बीमा — किसी भी कारण से', en:'₹2 lakh life cover at ₹1.20 a day — any cause'},
    pitch:  {hi:'"घर में सबका बीमा आदमी के नाम होता है। यह योजना कहती है — आपकी ज़िंदगी की भी कीमत है: ₹1.20 रोज़।"',
             en:'"Most households insure the man’s life. This scheme prices a woman’s life into protection at ₹1.20 a day."'},
    forWhom:{hi:'18 से 50 साल की महिलाएँ (55 तक जारी रख सकती हैं, अगर किस्तें भरती रहें)',
             en:'Women aged 18–50 to join; can continue till 55 if premiums are paid'},
    acct:   {hi:'आपका अपना बचत खाता', en:'Your own savings account'},
    figures:[
      [{hi:'सालाना प्रीमियम', en:'Premium (annual)'}, {hi:'₹436 — मई के अंत में अपने-आप कटता है', en:'₹436 — auto-debited end of May'}],
      [{hi:'कवर', en:'Coverage'},                     {hi:'किसी भी कारण मृत्यु पर ₹2 लाख (बीमारी, दुर्घटना, कुछ भी)', en:'₹2 lakh on death from ANY cause (illness, accident, etc.)'}],
      [{hi:'उम्र', en:'Age eligible'},                {hi:'18–50 जुड़ने के लिए; 55 तक जारी', en:'18–50 to join; continue till 55'}],
      [{hi:'बीच साल में जुड़ें तो', en:'Pro-rata premium'},{hi:'जून–अग ₹436 · सित–नव ₹342 · दिस–फर ₹228 · मार्च–मई ₹114', en:'Join Jun–Aug ₹436 | Sep–Nov ₹342 | Dec–Feb ₹228 | Mar–May ₹114'}],
      [{hi:'PMSBY से फ़र्क़', en:'Different from PMSBY'},{hi:'PMSBY = सिर्फ़ दुर्घटना। PMJJBY = मृत्यु का कोई भी कारण।', en:'PMSBY = accidents only. PMJJBY = any cause of death.'}],
    ],
    needs:  [{hi:'आधार', en:'Aadhaar'},
             {hi:'अपने नाम का बचत खाता', en:'A savings account in your name'},
             {hi:'खाते में मई के लिए ₹436+ का बैलेंस', en:'₹436+ balance for the May debit'}],
    disclaimer:{hi:'<strong>पहले 30 दिनों का नियम:</strong> जुड़ने के पहले 30 दिनों में बीमारी से मृत्यु हो, तो क्लेम नहीं मिलता (प्रीमियम वापस हो जाता है)। दुर्घटना पहले दिन से कवर है। 30 दिन बाद सब कुछ कवर है। क्लेम रिजेक्ट होने की सबसे आम वजह यही नियम है — घर में सबको बता दीजिए।',
             en:'<strong>The 30-day rule:</strong> if death from non-accidental causes happens within the first 30 days of enrollment, the claim is rejected (premium refunded). Accidental death is covered from day 1; after 30 days everything is covered. This rule is the most common reason claims get rejected — make sure the family knows.'},
    steps:  [{hi:'आधार लेकर अपनी बैंक शाखा जाइए', en:'Visit your bank branch with Aadhaar'},
             {hi:'PMJJBY फ़ॉर्म भरिए — अक्सर PMSBY के साथ एक ही बार में हो जाता है', en:'Fill the PMJJBY form — often the same visit/form as PMSBY'},
             {hi:'₹436 कटेगा और SMS आएगा', en:'₹436 debited, SMS confirmation sent'},
             {hi:'💡 दोनों साथ लीजिए: PMSBY + PMJJBY = ₹456/साल में ₹4 लाख का कवर', en:'💡 Enroll BOTH: PMSBY + PMJJBY = ₹4 lakh combined cover at ₹456/year'}],
    form:   'forms/pmjjby-form.pdf',
    sources:[{label:'PMJJBY हेल्पलाइन / Helpline: 1800-180-1111, 1800-110-001', url:null},
             {label:'Jan Suraksha (official)', url:'https://jansuraksha.gov.in'}],
  },

  apy: {
    insurance:false, tier:1,
    name:   {hi:'अटल पेंशन योजना (APY)', en:'Atal Pension Yojana (APY)'},
    short:  {hi:'60 के बाद ज़िंदगी भर, हर महीने पक्की पेंशन — आपके अपने नाम', en:'A guaranteed monthly pension for life after 60 — in YOUR name'},
    pitch:  {hi:'"एक कमाई जो हर महीने आपके खाते में, आपके नाम से आए — जिसे कोई और छू नहीं सकता। बुढ़ापे में अपने पैसों की मालkin आप खुद।"',
             en:'"An income that arrives in YOUR account, in YOUR name, untouchable by anyone else, for life. Financial autonomy at 60."'},
    forWhom:{hi:'18 से 40 साल की महिलाएँ — 40 के बाद जुड़ नहीं सकतीं (पक्की सीमा)। जिस घर में कोई इनकम टैक्स भरता है, वे पात्र नहीं (अक्टूबर 2022 से)।',
             en:'Women aged 18–40 — joining closes at 40 (hard cutoff). Income-tax payers are not eligible (since Oct 2022).'},
    acct:   {hi:'आपका अपना बचत खाता (पेंशन भी आपके ही नाम आएगी)', en:'Your own savings account (the pension is in your name)'},
    figures:[
      [{hi:'पेंशन के विकल्प', en:'Pension options'},   {hi:'₹1,000 / ₹2,000 / ₹3,000 / ₹4,000 / ₹5,000 हर महीने — आप चुनिए', en:'₹1,000 / ₹2,000 / ₹3,000 / ₹4,000 / ₹5,000 per month (you choose)'}],
      [{hi:'जुड़ने की उम्र', en:'Join age'},            {hi:'सिर्फ़ 18–40', en:'18–40 ONLY (hard cutoff)'}],
      [{hi:'₹5,000 पेंशन का मासिक खर्च', en:'Monthly cost (₹5k pension)'}, {hi:'18 की उम्र में ₹210 · 25 में ₹376 · 30 में ₹577 · 40 में ₹1,454', en:'Age 18: ₹210 | Age 25: ₹376 | Age 30: ₹577 | Age 40: ₹1,454'}],
      [{hi:'गारंटी', en:'Guarantee'},                   {hi:'फंड कम पड़े तो सरकार भरपाई करती है — ऐसा और कोई प्रोडक्ट नहीं करता', en:'Government tops up if the fund underperforms — no other product offers this'}],
      [{hi:'60 से पहले मृत्यु हो तो', en:'If you die before 60'}, {hi:'पति/पत्नी जारी रख सकते हैं, या जमा राशि (₹1.7–8.5 लाख) वापस ले सकते हैं', en:'Spouse can continue, or take back the corpus (₹1.7L–₹8.5L)'}],
    ],
    needs:  [{hi:'आधार', en:'Aadhaar'},
             {hi:'अपने नाम का बचत खाता', en:'A savings account in your name'},
             {hi:'घर में कोई ITR न भरता हो', en:'No income-tax payer in the household'}],
    disclaimer:{hi:'<strong>सच्ची बात:</strong> 2060 में ₹5,000 की कीमत आज जितनी नहीं होगी (महँगाई के साथ पेंशन नहीं बढ़ती)। फिर भी — यह पक्का करती है कि बुढ़ापे में आपका खाता कभी ₹0 न हो, और आपको पूरी तरह बच्चों पर निर्भर न रहना पड़े। और किस्त हर महीने अपने-आप कटती है — खाते में पैसे रखना न भूलिए।',
             en:'<strong>Honest caveat:</strong> ₹5,000 in 2060 will be worth less than ₹5,000 today (the pension is not inflation-indexed). But it guarantees you never have ₹0 in old age and never fully depend on your children. The contribution auto-debits monthly — keep the account funded.'},
    steps:  [{hi:'आधार लेकर अपनी बैंक शाखा जाइए', en:'Visit your bank branch with Aadhaar'},
             {hi:'APY फ़ॉर्म भरिए और पेंशन राशि चुनिए', en:'Fill the APY form and choose your pension amount'},
             {hi:'💡 जितनी कम उम्र में शुरू, उतना सस्ता — 18 बनाम 40 में 7 गुना फ़र्क़', en:'💡 The younger you start, the cheaper — a 7× difference between joining at 18 vs 40'}],
    form:   'forms/apy-form.pdf',
    sources:[{label:'APY जानकारी: atal-pension.nsdl.com या आपका बैंक', url:'https://atal-pension.nsdl.com'}],
  },

  ssy: {
    insurance:false, tier:2,
    name:   {hi:'सुकन्या समृद्धि योजना (SSY)', en:'Sukanya Samriddhi Yojana (SSY)'},
    short:  {hi:'बेटी के नाम बचत — सबसे ऊँचा सरकारी ब्याज, 18 पर पैसा कानूनन सिर्फ़ उसका',
             en:'Savings in your daughter’s name — the highest govt rate, legally hers at 18'},
    pitch:  {hi:'"शादी के लिए पापा के खाते में रखा पैसा मुसीबत में खर्च हो जाता है। SSY का पैसा कानूनन सिर्फ़ बेटी का है — कोई और छू नहीं सकता।"',
             en:'"Money saved ‘for marriage’ in Dad’s account vanishes on emergencies. SSY money is legally untouchable by anyone but the daughter."'},
    forWhom:{hi:'जिन माँओं की बेटी 10 साल से छोटी है', en:'Mothers with daughters under 10'},
    acct:   {hi:'खाता बेटी के नाम खुलता है', en:'The account is in the girl child’s name'},
    figures:[
      [{hi:'ब्याज दर', en:'Interest rate'},     {hi:'8.2% सालाना — सरकारी योजनाओं में सबसे ऊँची', en:'8.2% p.a. — the highest govt scheme rate'}],
      [{hi:'जमा', en:'Deposit range'},           {hi:'कम-से-कम ₹250/साल, ज़्यादा-से-ज़्यादा ₹1.5 लाख/साल', en:'Min ₹250/year, Max ₹1.5 lakh/year'}],
      [{hi:'जमा अवधि', en:'Deposit period'},     {hi:'15 साल (फिर मैच्योरिटी तक ब्याज बढ़ता रहता है)', en:'15 years (then auto-grows till maturity)'}],
      [{hi:'मैच्योरिटी', en:'Maturity'},         {hi:'खाता खुलने से 21 साल — पूरी रकम टैक्स-फ्री', en:'21 years from opening, fully tax-free'}],
      [{hi:'बेटी 18 की होने पर', en:'At age 18'},{hi:'खाता बेटी का; पढ़ाई के लिए 50% निकाल सकती है', en:'Daughter takes over; can withdraw 50% for education'}],
      [{hi:'मिसाल', en:'Example'},               {hi:'₹1,000/महीना × 15 साल = ₹1.8 लाख जमा → मैच्योरिटी पर लगभग ₹5.5 लाख', en:'₹1,000/month for 15 years = ₹1.8 lakh in → ~₹5.5 lakh at maturity'}],
    ],
    needs:  [{hi:'बेटी का जन्म प्रमाण-पत्र', en:'The girl’s birth certificate'},
             {hi:'माँ का आधार और बैंक खाता', en:'Mother’s Aadhaar and bank account'},
             {hi:'हर साल कम-से-कम ₹250 जमा', en:'At least ₹250 deposited every year'}],
    disclaimer:{hi:'<strong>जन्म प्रमाण-पत्र ज़रूरी है।</strong> न बना हो तो नगर निगम / नगरपालिका से बनवाइए — मुफ़्त या मामूली खर्च। यह एक कागज़ SSY + स्कूल दाखिला + आगे के पहचान-पत्र, सब खोल देता है। और ध्यान रखिए: किसी साल ₹250 जमा करना चूक गईं, तो खाता रुक जाता है और ₹50 जुर्माने के साथ दोबारा चालू कराना पड़ता है।',
             en:'<strong>The birth certificate is essential.</strong> If she doesn’t have one, get it at the municipal corporation — free or minimal cost. That one paper unlocks SSY + school admission + future ID documents. Also: miss the ₹250 minimum in a year and the account freezes — reactivating costs a ₹50 penalty.'},
    steps:  [{hi:'बेटी का जन्म प्रमाण-पत्र + अपना आधार लीजिए', en:'Take the birth certificate + your Aadhaar'},
             {hi:'नज़दीकी डाकघर या बैंक जाइए', en:'Go to the nearest post office or bank'},
             {hi:'SSY फ़ॉर्म भरिए और पहली जमा (₹250 से) कीजिए', en:'Fill the SSY form and make the first deposit (from ₹250)'}],
    form:   'forms/ssy-form.pdf',
    sources:[{label:'SSY: indiapost.gov.in या कोई भी डाकघर / बैंक', url:'https://www.indiapost.gov.in'}],
  },

  pmmvy: {
    insurance:false, tier:2,
    name:   {hi:'पीएम मातृ वंदना योजना (PMMVY)', en:'PM Matru Vandana Yojana (PMMVY)'},
    short:  {hi:'गर्भवती / नई माँ को सीधे खाते में ₹5,000–6,000 — बिल्कुल मुफ़्त योजना',
             en:'₹5,000–6,000 straight to a pregnant woman’s / new mother’s account — completely free'},
    pitch:  {hi:'"इसी हफ्ते आंगनवाड़ी दीदी के पास जाइए और PMMVY पंजीकरण माँगिए। जो जाँचें वैसे भी करानी चाहिए, उन्हीं के पैसे मिलते हैं।"',
             en:'"Go to the Anganwadi didi THIS WEEK and ask for PMMVY registration. You get paid for health checks you should do anyway."'},
    forWhom:{hi:'गर्भवती महिलाएँ और नई माँएँ (उम्र 19+)', en:'Pregnant women & new mothers (age 19+)'},
    acct:   {hi:'पैसा सीधे माँ के आधार-लिंक खाते में आता है (DBT)', en:'Direct Bank Transfer (DBT) to the mother’s Aadhaar-linked account'},
    figures:[
      [{hi:'पहला बच्चा', en:'First child'},   {hi:'₹5,000 दो किस्तों में — ₹3,000 (गर्भावस्था पंजीकरण + 1 जाँच) और ₹2,000 (जन्म पंजीकरण + पहला टीका)', en:'₹5,000 in 2 instalments — ₹3,000 (pregnancy registration + 1 check-up) and ₹2,000 (birth registration + first vaccination)'}],
      [{hi:'दूसरा बच्चा (सिर्फ़ बेटी)', en:'Second child (only if girl)'}, {hi:'₹6,000 एक किस्त में — बेटी होने पर बढ़ा हुआ प्रोत्साहन', en:'₹6,000 in one instalment — a deliberate pro-girl incentive'}],
      [{hi:'उम्र', en:'Age requirement'},      {hi:'माँ की उम्र 19 साल या ज़्यादा', en:'Mother 19+ years'}],
      [{hi:'शर्त (कोई एक काफ़ी है)', en:'Eligibility (any ONE)'}, {hi:'SC/ST · BPL कार्ड · आयुष्मान कार्ड · मनरेगा कार्ड · आय ₹8 लाख/साल से कम', en:'SC/ST · BPL card · Ayushman card · MGNREGA card · income under ₹8 lakh/year'}],
      [{hi:'खर्च', en:'Cost'},                {hi:'कुछ नहीं — यह पूरी तरह मुफ़्त है', en:'Nothing — this scheme is free'}],
      [{hi:'कहाँ आवेदन करें', en:'Where to apply'}, {hi:'नज़दीकी आंगनवाड़ी केंद्र या ASHA दीदी', en:'Local Anganwadi worker or ASHA'}],
    ],
    needs:  [{hi:'आधार (माँ का), आधार से जुड़ा बैंक खाता', en:'Mother’s Aadhaar + Aadhaar-linked bank account'},
             {hi:'आंगनवाड़ी केंद्र पर पंजीकरण', en:'Registration at the Anganwadi centre'},
             {hi:'ऊपर की सूची में से कोई एक पात्रता-कागज़', en:'Any one eligibility document from the list above'}],
    disclaimer:{hi:'किस्तें अपने-आप नहीं आतीं — हर किस्त एक कदम से जुड़ी है (पंजीकरण, जाँच, टीका)। आंगनवाड़ी पंजीकरण ही असली आवेदन है; वह छूटा तो कुछ नहीं मिलता। दूसरे बच्चे पर योजना सिर्फ़ बेटी के लिए है।',
             en:'Instalments are not automatic — each is tied to a step (registration, check-up, vaccination). The Anganwadi registration IS the application; skip it and nothing arrives. On a second child, the scheme applies only if the child is a girl.'},
    steps:  [{hi:'इसी हफ्ते नज़दीकी आंगनवाड़ी केंद्र जाइए', en:'Go to your nearest Anganwadi centre this week'},
             {hi:'PMMVY पंजीकरण माँगिए — दीदी फ़ॉर्म भरने में मदद करती हैं', en:'Ask for PMMVY registration — the didi helps fill the form'},
             {hi:'जाँच/टीके समय पर कराइए — किस्तें उन्हीं से खुलती हैं', en:'Do the check-ups/vaccinations on time — they unlock the instalments'}],
    form:   'forms/pmmvy-form-1a.pdf',
    formsExtra:[{label:{hi:'फ़ॉर्म 1-B (दूसरी किस्त)', en:'Form 1-B (second instalment)'}, file:'forms/pmmvy-form-1b.pdf'},
                {label:{hi:'फ़ॉर्म 1-C (तीसरी किस्त)', en:'Form 1-C (third instalment)'}, file:'forms/pmmvy-form-1c.pdf'}],
    sources:[{label:'PMMVY पंजीकरण: आंगनवाड़ी केंद्र या ASHA दीदी', url:null},
             {label:'महिला एवं बाल विकास मंत्रालय / Ministry of WCD', url:'https://wcd.nic.in'}],
  },

  mudra: {
    insurance:false, tier:2,
    name:   {hi:'पीएम मुद्रा योजना — शिशु लोन', en:'PM Mudra Yojana — Shishu Loans'},
    short:  {hi:'चलते काम को बढ़ाने के लिए ₹50,000 तक का लोन — बिना गारंटी, बिना गिरवी',
             en:'Up to ₹50,000 to grow a running income activity — no collateral, no guarantor'},
    pitch:  {hi:'"जो महिला पहले से कमा रही है, उसके काम को बड़ा करने के लिए — सिलाई मशीन, ठेला, दुकान का सामान।"',
             en:'"For a woman already earning — capital to grow the work: a sewing machine, a cart, shop stock."'},
    forWhom:{hi:'जो महिलाएँ पहले से कोई कमाई का काम चलाती हैं — सिलाई, टिफ़िन, किराना, ब्यूटी, सब्ज़ी। जो अभी नहीं कमातीं, उनके लिए यह योजना <strong>नहीं</strong> है (बिना कमाई के कर्ज़ बोझ बनता है)।',
             en:'Women already running an income activity — tailoring, tiffin/food, kirana, beauty work, vegetable vending. NOT for women with no income activity (debt without revenue = stress).'},
    acct:   {hi:'लोन आपके नाम, आपके खाते में', en:'The loan is in your name, to your account'},
    figures:[
      [{hi:'लोन राशि', en:'Loan amount'},   {hi:'₹50,000 तक — बिना गारंटी, बिना गिरवी', en:'Up to ₹50,000 (no collateral, no guarantor)'}],
      [{hi:'ब्याज दर', en:'Interest rate'}, {hi:'बैंक मुद्रा: 9–12.5% सालाना · माइक्रोफाइनेंस/NBFC: 18–24%+ (हमेशा पूछिए!)', en:'Bank Mudra: 9–12.5% p.a. | MFI/NBFC: 18–24%+ (ASK!)'}],
      [{hi:'वापसी', en:'Repayment'},        {hi:'1–5 साल, मासिक किस्तों में', en:'1–5 years in monthly instalments'}],
      [{hi:'किन कामों के लिए सही', en:'Best for'}, {hi:'सिलाई, टिफ़िन/खाना, किराना, ब्यूटी, सब्ज़ी बेचना', en:'Tailoring, tiffin/food, kirana, beauty work, vegetable vending'}],
      [{hi:'आवेदन', en:'Application'},      {hi:'बैंक शाखा या jansamarth.gov.in', en:'Bank branch or JanSamarth.gov.in'}],
    ],
    needs:  [{hi:'चलता हुआ कमाई का काम', en:'A live income activity'},
             {hi:'आधार + बैंक खाता', en:'Aadhaar + bank account'},
             {hi:'साफ़ हिसाब: कितना चाहिए, किस पर खर्च होगा', en:'A clear plan: how much you need and on what'}],
    disclaimer:{hi:'<strong>धोखे से बचिए:</strong> "एजेंट फीस" माँगने वाला हमेशा धोखेबाज़ है — मुद्रा लोन की कोई फीस नहीं। OTP या आधार किसी बिचौलिए को कभी न दें। EMI आपकी महीने की <strong>बचत</strong> से काफ़ी कम होनी चाहिए, कमाई से नहीं। और ब्याज दर ज़रूर पूछिए — बैंक (9–12%) दरवाज़े पर मिलने वाले लोन (20%+) से बहुत सस्ता है। पहले से कर्ज़ चल रहा हो, तो नया लोन लेने से पहले बैंक से पूरी बात कीजिए।',
             en:'<strong>Red flags:</strong> anyone asking an "agent fee" = SCAM — Mudra has no fee. Never give OTP or Aadhaar to facilitators. Your EMI should be much less than your monthly <strong>surplus</strong>, not your revenue. Always ask the interest rate — banks (9–12%) are far cheaper than doorstep loans (20%+). If you already have a loan running, talk to the bank before stacking another.'},
    steps:  [{hi:'अपना हिसाब तैयार कीजिए: कितना चाहिए, किस पर खर्च होगा', en:'Prepare your plan: how much, spent on what'},
             {hi:'आधार + खाता लेकर बैंक शाखा जाइए, या jansamarth.gov.in पर आवेदन कीजिए', en:'Take Aadhaar + account details to a bank branch, or apply on jansamarth.gov.in'},
             {hi:'ब्याज दर पूछिए और लिखवा लीजिए', en:'Ask the interest rate and get it in writing'}],
    form:   null,
    sources:[{label:'मुद्रा लोन: jansamarth.gov.in / udyamimitra.in (पात्रता की अपने-आप जाँच)', url:'https://www.jansamarth.gov.in'},
             {label:'बैंक शिकायत / RBI लोकपाल: cms.rbi.org.in', url:'https://cms.rbi.org.in'}],
  },

  jandhan: {
    insurance:false, tier:0,
    name:   {hi:'जन धन खाता (पहला कदम)', en:'Jan Dhan account (step zero)'},
    short:  {hi:'मुफ़्त, ज़ीरो-बैलेंस बैंक खाता — हर योजना का दरवाज़ा यहीं से खुलता है',
             en:'A free, zero-balance bank account — the door every scheme opens through'},
    pitch:  {hi:'"आधार लेकर किसी भी बैंक जाइए, जन धन खाता माँगिए। न कोई फीस, न कम-से-कम रकम।"',
             en:'"Take your Aadhaar to any bank and ask for a Jan Dhan account. No fee, no minimum balance."'},
    forWhom:{hi:'हर वह महिला जिसके अपने नाम का बैंक खाता नहीं है', en:'Every woman who doesn’t yet have a bank account in her own name'},
    acct:   {hi:'आपके अपने नाम का खाता', en:'An account in your own name'},
    figures:[
      [{hi:'खर्च', en:'Cost'},              {hi:'कुछ नहीं — खाता मुफ़्त खुलता है', en:'Nothing — the account is free'}],
      [{hi:'कम-से-कम रकम', en:'Minimum balance'}, {hi:'ज़रूरी नहीं (ज़ीरो-बैलेंस चलता है)', en:'None (zero balance is fine)'}],
      [{hi:'क्या चाहिए', en:'What you need'}, {hi:'सिर्फ़ आधार', en:'Just your Aadhaar'}],
      [{hi:'क्यों ज़रूरी', en:'Why it matters'}, {hi:'PMSBY, PMJJBY, APY, SSY, PMMVY, मुद्रा — सबके लिए अपना खाता पहली शर्त है', en:'PMSBY, PMJJBY, APY, SSY, PMMVY, Mudra — your own account is the first requirement for all of them'}],
    ],
    needs:  [{hi:'आधार', en:'Aadhaar'}],
    disclaimer:{hi:'खाता <strong>अपने नाम</strong> का खुलवाइए — पति या बेटे के खाते से योजनाओं का फ़ायदा आप तक नहीं पहुँचता। खाता खुलते ही आधार लिंक करने को ज़रूर कहिए।',
             en:'Open the account in <strong>your own name</strong> — schemes don’t reach you through a husband’s or son’s account. Ask them to link Aadhaar at opening.'},
    steps:  [{hi:'आधार लेकर किसी भी बैंक शाखा जाइए', en:'Take your Aadhaar to any bank branch'},
             {hi:'"जन धन खाता खोलना है" कहिए', en:'Say you want to open a Jan Dhan account'},
             {hi:'आधार लिंक करवाइए — उसी दिन हो जाता है', en:'Get Aadhaar linked — it happens the same day'}],
    form:   null,
    sources:[{label:'PM Jan Dhan Yojana (official)', url:'https://pmjdy.gov.in'}],
  },
};

// ---------------------------------------------------------------------------
// About / Mission / Impact.
// 05 Jul meeting (session-notes/2026-07-05-…md): the research REPORT is NOT
// shown or quoted on the site (Riddhima's call). Copy below is therefore
// interview-grounded only (quoting the interviewed women on the site is
// consented — confirmed in the same meeting). About/Mission/Impact copy is
// hers to finalize (walkthrough content-owed list); this is a working draft.
// ---------------------------------------------------------------------------
const ABOUT = {
  about: {
    title: {hi:'परियोजना के बारे में', en:'About the project'},
    body: {
      hi:`<p><strong>ArthNari</strong> एक जागरूकता वेबसाइट है, जो कम आय वाली और ग्रामीण महिलाओं को उनके हक़ की सरकारी योजनाओं तक पहुँचाती है — सादी भाषा में, छिपी शर्तों समेत, और "आगे क्या करना है" के साफ़ रास्ते के साथ।</p>
<p>यह परियोजना हमारी अपनी ज़मीनी बातचीत से निकली है। घरेलू काम करने वाली जिन महिलाओं से हम मिले, सबने योजनाओं के नाम सुने थे — फ़ायदा किसी को नहीं मिला था। वजह पात्रता नहीं थी; वजह यह थी कि कभी किसी ने साथ बैठकर बताया ही नहीं कि आवेदन कैसे होता है।</p>
<p>जानकारी होने और फ़ायदा मिलने के बीच की इसी खाई को पाटना ArthNari का काम है। यह वेबसाइट खाता नहीं खोलती, पैसा नहीं लेती, कोई निजी जानकारी नहीं माँगती — यह सिर्फ़ आपको सही योजना, सही कागज़ और सही दरवाज़े तक पहुँचाती है।</p>`,
      en:`<p><strong>ArthNari</strong> is an awareness website that connects low-income and rural women to the government schemes that are rightfully theirs — in plain language, fine print included, with a clear "what to do next."</p>
<p>The project grew out of our own fieldwork. Every woman we sat with — women working as domestic help — had heard of schemes made for her. None had benefited from any. The reason was not eligibility; it was that no one had ever sat with them, explained how to enroll, and helped them complete the process.</p>
<p>Closing that gap between knowing and benefiting is what ArthNari does. This website opens no accounts, takes no money, and asks for no personal information — it simply walks you to the right scheme, the right documents, and the right doorstep.</p>`,
    },
  },
  mission: {
    title: {hi:'हमारा उद्देश्य', en:'Our mission'},
    body: {
      hi:`<p>समस्या जानकारी की कमी नहीं है — समस्या <strong>भरोसे और साथ</strong> की है। जो महिलाएँ रोज़ अपना घर चलाती हैं, वे भी अक्सर अकेले बैंक जाने या फ़ॉर्म भरने में हिचकती हैं।</p>
<blockquote>"जब एक महिला आर्थिक आत्मविश्वास पाती है, तो पूरा समुदाय आगे बढ़ता है — पीढ़ियों तक।"</blockquote>
<p>इसीलिए ArthNari सिर्फ़ "जागरूकता" नहीं फैलाती — यह हर महिला को उसकी अपनी स्थिति के हिसाब से अगला ठोस कदम देती है: कौन-सी योजना, कौन-से कागज़, किस दफ़्तर में, इसी हफ्ते।</p>
<p class="brand-tagline">Access. Ability. Agency.</p>`,
      en:`<p>The problem is not a lack of information — it is <strong>confidence and company</strong>. Women who run their households every day still hesitate to walk into a bank alone or fill a form.</p>
<blockquote>"When one person gains financial confidence, the whole community benefits — rippling outward for generations."</blockquote>
<p>That is why ArthNari doesn’t just spread "awareness" — it hands every woman her own concrete next step: which scheme, which documents, which office, this week.</p>
<p class="brand-tagline">Access. Ability. Agency.</p>`,
    },
  },
  // IMPACT — designed to be UPDATED over time (her explicit ask).
  // To add an entry: append to the list below and redeploy. Honest numbers only.
  impact: {
    title: {hi:'असर (Impact)', en:'Impact'},
    intro: {hi:'हम यहाँ सिर्फ़ सच्चे, गिने हुए आँकड़े रखेंगे — जैसे-जैसे काम बढ़ेगा, यह पन्ना बढ़ेगा।',
            en:'Only real, counted numbers will appear here — this page grows as the work grows.'},
    entries: [
      {date:'2025-11', hi:'162 महिलाओं का जागरूकता-सर्वे पूरा', en:'Awareness survey of 162 women completed'},
      {date:'2026-06', hi:'घरेलू कामगार महिलाओं से आमने-सामने बातचीत (रांची)', en:'Field interviews with domestic workers (Ranchi)'},
      {date:'2026-07', hi:'योजना-खोज वेबसाइट का निर्माण', en:'The scheme-finder website built'},
    ],
  },
  sources: {
    title: {hi:'स्रोत', en:'Sources'},
    intro: {hi:'इस वेबसाइट की हर जानकारी नीचे दिए सरकारी स्रोतों और ArthNari के अपने शोध पर आधारित है। फ़ॉर्म सीधे सरकारी विभागों के हैं।',
            en:'Everything on this site is grounded in the official sources below and ArthNari’s own research. All forms are the official government forms.'},
    items: [
      {label:'PMSBY / PMJJBY हेल्पलाइन: 1800-180-1111 · 1800-110-001', url:null},
      {label:'Jan Suraksha — PMSBY / PMJJBY', url:'https://jansuraksha.gov.in'},
      {label:'Atal Pension Yojana — atal-pension.nsdl.com', url:'https://atal-pension.nsdl.com'},
      {label:'Sukanya Samriddhi — India Post', url:'https://www.indiapost.gov.in'},
      {label:'PMMVY — महिला एवं बाल विकास मंत्रालय (wcd.nic.in)', url:'https://wcd.nic.in'},
      {label:'Mudra / JanSamarth — jansamarth.gov.in · udyamimitra.in', url:'https://www.jansamarth.gov.in'},
      {label:'PM Jan Dhan Yojana — pmjdy.gov.in', url:'https://pmjdy.gov.in'},
      {label:'बैंक शिकायत / RBI लोकपाल — cms.rbi.org.in', url:'https://cms.rbi.org.in'},
    ],
  },
};
