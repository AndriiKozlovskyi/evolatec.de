<template>
  <div class="bg-surface-container-low">

    <!-- Header band -->
    <section class="bg-primary text-on-primary">
      <div class="max-w-3xl mx-auto px-gutter py-14 md:py-20 text-center">
        <div class="inline-flex w-14 h-14 rounded-2xl bg-white/10 items-center justify-center mb-5">
          <span class="material-symbols-outlined text-[1.9rem]">shield_person</span>
        </div>
        <h1 class="font-display text-3xl md:text-4xl font-black mb-3">Privacy Policy</h1>
        <p class="text-on-primary/70 max-w-lg mx-auto leading-relaxed">
          Transparency about what data we process — and why. Your trust is the foundation of our work.
        </p>
        <span class="inline-block mt-6 text-xs font-bold uppercase tracking-[0.15em] bg-white/10 rounded-full px-4 py-1.5">
          Last updated: May 2026
        </span>
      </div>
    </section>

    <!-- Content -->
    <div class="max-w-3xl mx-auto px-gutter pb-16 md:pb-24 -mt-10">
      <article class="bg-white rounded-2xl border border-outline-variant/20 shadow-sm p-6 sm:p-10">

        <!-- Table of contents -->
        <nav class="bg-surface-container-low rounded-xl p-5 sm:p-6 mb-12" aria-label="Table of Contents">
          <p class="font-bold text-on-surface text-sm mb-4">Table of Contents</p>
          <ol class="grid sm:grid-cols-2 gap-x-6 gap-y-1">
            <li v-for="(entry, i) in toc" :key="entry.id">
              <a
                :href="`#${entry.id}`"
                class="group flex items-center gap-3 py-1.5 text-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                <span class="w-6 h-6 shrink-0 rounded-md bg-white border border-outline-variant/30 text-xs font-bold text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary transition-colors">
                  {{ i + 1 }}
                </span>
                {{ entry.label }}
              </a>
            </li>
          </ol>
        </nav>

        <!-- 1 -->
        <h2 id="overview" class="legal-h2"><span class="legal-num">1</span>Privacy at a Glance</h2>

        <h3 class="legal-h3">General Information</h3>
        <p class="legal-p">The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data that can be used to identify you personally. For detailed information on the subject of data protection, please refer to our privacy policy listed below.</p>

        <h3 class="legal-h3">Data Collection on This Website</h3>
        <p class="legal-p"><strong class="text-on-surface">Who is responsible for data collection on this website?</strong><br>
        Data processing on this website is carried out by the website operator. You can find their contact details in the section "Notice regarding the responsible party" in this privacy policy.</p>

        <p class="legal-p"><strong class="text-on-surface">How do we collect your data?</strong><br>
        Your data is collected in part when you provide it to us. This may be, for example, data you enter into a contact form. Other data is collected automatically or with your consent by our IT systems when you visit the website. This is primarily technical data (e.g. internet browser, operating system or time of page access).</p>

        <p class="legal-p"><strong class="text-on-surface">What do we use your data for?</strong><br>
        Some of the data is collected to ensure error-free provision of the website. Other data may be used to analyse your usage behaviour. Where contracts can be concluded or initiated via the website, the transmitted data is also processed for contract offers, orders or other service requests.</p>

        <p class="legal-p"><strong class="text-on-surface">What rights do you have regarding your data?</strong><br>
        You have the right at any time to receive information free of charge about the origin, recipient and purpose of your stored personal data. You also have the right to request the correction or deletion of this data. If you have given consent to data processing, you can revoke this consent at any time for the future. You also have the right to request the restriction of the processing of your personal data under certain circumstances. Furthermore, you have the right to lodge a complaint with the competent supervisory authority.</p>

        <h3 class="legal-h3">Analysis Tools and Third-Party Tools</h3>
        <p class="legal-p">When you visit this website, your browsing behaviour may be statistically analysed. This is done primarily with analysis programmes. Detailed information on these analysis programmes can be found in the following privacy policy.</p>

        <!-- 2 -->
        <h2 id="hosting" class="legal-h2"><span class="legal-num">2</span>Hosting (Netlify)</h2>
        <p class="legal-p">We host the contents of our website with the following provider:</p>

        <h3 class="legal-h3">Netlify</h3>
        <p class="legal-p">
          Netlify, Inc.<br>
          512 2nd Street, Suite 200<br>
          San Francisco, CA 94107, USA<br><br>
          Website: <a href="https://www.netlify.com" target="_blank" rel="noopener" class="legal-a">www.netlify.com</a><br>
          Privacy Policy: <a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener" class="legal-a">netlify.com/privacy</a>
        </p>
        <p class="legal-p">This website is hosted externally. Personal data collected on this website is stored on Netlify's servers. This may include IP addresses, contact requests, meta and communication data, contract data, contact details, names, website accesses and other data generated via a website.</p>
        <p class="legal-p">External hosting is carried out for the purpose of fulfilling contracts with our potential and existing customers (Art. 6(1)(b) GDPR) and in the interest of a secure, fast and efficient provision of our online offering by a professional provider (Art. 6(1)(f) GDPR). Where consent has been requested, processing takes place exclusively on the basis of Art. 6(1)(a) GDPR. Consent can be revoked at any time.</p>
        <p class="legal-p">Netlify is certified under the "EU-US Data Privacy Framework" (DPF), which ensures compliance with European data protection standards for data processing in the USA.</p>
        <p class="legal-p">We have concluded a data processing agreement (DPA) with Netlify. Netlify processes your data only to the extent necessary to fulfil its service obligations.</p>

        <!-- 3 -->
        <h2 id="general" class="legal-h2"><span class="legal-num">3</span>General Information and Mandatory Disclosures</h2>

        <h3 class="legal-h3">Data Protection</h3>
        <p class="legal-p">The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this privacy policy.</p>
        <p class="legal-p">We would like to point out that data transmission over the Internet (e.g. when communicating by e-mail) may be subject to security vulnerabilities. Complete protection of data from access by third parties is not possible.</p>

        <h3 class="legal-h3">Notice regarding the Responsible Party</h3>
        <p class="legal-p">The party responsible for data processing on this website is:</p>
        <div class="legal-card">
          <p class="font-bold text-on-surface mb-1">Maksym Streltsov</p>
          <p class="text-sm text-on-surface-variant leading-relaxed">
            Desenißstraße 14<br>
            22083 Hamburg, Germany
          </p>
          <div class="flex flex-col gap-1.5 mt-3 pt-3 border-t border-outline-variant/20">
            <a href="tel:+491756200862" class="inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors">
              <span class="material-symbols-outlined text-base">phone</span>+49 175 6200862
            </a>
            <a href="mailto:team@evolatec.de" class="inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors">
              <span class="material-symbols-outlined text-base">mail</span>team@evolatec.de
            </a>
          </div>
        </div>
        <p class="legal-p">The responsible party is the natural or legal person who alone or jointly with others decides on the purposes and means of processing personal data.</p>

        <h3 class="legal-h3">Retention Period</h3>
        <p class="legal-p">Unless a more specific retention period is stated within this privacy policy, your personal data will remain with us until the purpose for the data processing ceases to apply. If you make a legitimate request for deletion or revoke consent to data processing, your data will be deleted unless we have other legally permissible reasons for storing your personal data (e.g. tax or commercial law retention periods); in the latter case deletion takes place after these reasons cease to apply.</p>

        <h3 class="legal-h3">Legal Bases for Processing</h3>
        <p class="legal-p">Where you have given consent to data processing, we process your personal data on the basis of Art. 6(1)(a) GDPR. Where your data is required for the fulfilment of a contract, we process your data on the basis of Art. 6(1)(b) GDPR. Data processing may also be based on our legitimate interest pursuant to Art. 6(1)(f) GDPR.</p>

        <h3 class="legal-h3">Recipients of Personal Data</h3>
        <p class="legal-p">In the course of our business activities we work with various external parties. This sometimes also requires the transfer of personal data to these external parties. We only pass on personal data to external parties where this is necessary for the performance of a contract, where we are legally obliged to do so, where we have a legitimate interest pursuant to Art. 6(1)(f) GDPR in passing on the data, or where another legal basis permits the transfer.</p>

        <h3 class="legal-h3">Revocation of Your Consent to Data Processing</h3>
        <p class="legal-p">Many data processing operations are only possible with your express consent. You can revoke consent you have already given at any time. The lawfulness of data processing carried out before the revocation remains unaffected by the revocation.</p>

        <h3 class="legal-h3">Right to Object to Data Collection in Special Cases and to Direct Marketing (Art. 21 GDPR)</h3>
        <div class="legal-callout">
          <span class="material-symbols-outlined text-primary text-xl shrink-0">gavel</span>
          <div class="space-y-3 text-xs leading-relaxed text-on-surface-variant font-medium">
            <p>WHERE DATA PROCESSING IS CARRIED OUT ON THE BASIS OF ART. 6(1)(E) OR (F) GDPR, YOU HAVE THE RIGHT AT ANY TIME TO OBJECT TO THE PROCESSING OF YOUR PERSONAL DATA FOR REASONS ARISING FROM YOUR PARTICULAR SITUATION; THIS ALSO APPLIES TO PROFILING BASED ON THESE PROVISIONS. THE RESPECTIVE LEGAL BASIS ON WHICH PROCESSING IS BASED CAN BE FOUND IN THIS PRIVACY POLICY. IF YOU OBJECT, WE WILL NO LONGER PROCESS YOUR PERSONAL DATA UNLESS WE CAN DEMONSTRATE COMPELLING LEGITIMATE GROUNDS FOR THE PROCESSING WHICH OVERRIDE YOUR INTERESTS, RIGHTS AND FREEDOMS, OR THE PROCESSING SERVES THE ESTABLISHMENT, EXERCISE OR DEFENCE OF LEGAL CLAIMS (OBJECTION PURSUANT TO ART. 21(1) GDPR).</p>
            <p>WHERE YOUR PERSONAL DATA IS PROCESSED FOR DIRECT MARKETING PURPOSES, YOU HAVE THE RIGHT TO OBJECT AT ANY TIME TO THE PROCESSING OF PERSONAL DATA CONCERNING YOU FOR SUCH MARKETING; THIS ALSO APPLIES TO PROFILING TO THE EXTENT THAT IT IS RELATED TO SUCH DIRECT MARKETING. IF YOU OBJECT, YOUR PERSONAL DATA WILL SUBSEQUENTLY NO LONGER BE USED FOR DIRECT MARKETING PURPOSES (OBJECTION PURSUANT TO ART. 21(2) GDPR).</p>
          </div>
        </div>

        <h3 class="legal-h3">Right to Lodge a Complaint with the Supervisory Authority</h3>
        <p class="legal-p">In the event of violations of the GDPR, data subjects have the right to lodge a complaint with a supervisory authority. The competent authority for Hamburg is:</p>
        <p class="legal-p">
          Der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit<br>
          Ludwig-Erhard-Str. 22, 20459 Hamburg<br>
          <a href="https://www.datenschutz.hamburg.de" target="_blank" rel="noopener" class="legal-a">datenschutz.hamburg.de</a>
        </p>

        <h3 class="legal-h3">Right to Data Portability</h3>
        <p class="legal-p">You have the right to have data that we process automatically on the basis of your consent or in fulfilment of a contract handed over to you or to a third party in a common, machine-readable format.</p>

        <h3 class="legal-h3">SSL/TLS Encryption</h3>
        <p class="legal-p">This site uses SSL/TLS encryption for security reasons. You can recognise an encrypted connection by the fact that the address line of the browser changes from "http://" to "https://" and by the lock symbol in your browser line. When SSL/TLS encryption is activated, the data you transmit to us cannot be read by third parties.</p>

        <h3 class="legal-h3">Right to Restriction of Processing</h3>
        <p class="legal-p">You have the right to request the restriction of processing of your personal data. This right exists in the following cases:</p>
        <ul class="legal-ul">
          <li>If you dispute the accuracy of your personal data stored by us</li>
          <li>If the processing of your personal data was/is unlawful</li>
          <li>If we no longer need your personal data but you require it for the exercise of legal claims</li>
          <li>If you have lodged an objection pursuant to Art. 21(1) GDPR</li>
        </ul>

        <!-- 4 -->
        <h2 id="datacollection" class="legal-h2"><span class="legal-num">4</span>Data Collection on This Website</h2>

        <h3 class="legal-h3">Cookies</h3>
        <p class="legal-p">Our websites use so-called "cookies". Cookies are small data packages and do not cause any damage to your device. They are stored either temporarily for the duration of a session (session cookies) or permanently (permanent cookies) on your device. Session cookies are automatically deleted after your visit.</p>
        <p class="legal-p">Cookies may come from us (first-party cookies) or from third-party companies (third-party cookies). Cookies that are necessary for the electronic communication process (necessary cookies) are stored on the basis of Art. 6(1)(f) GDPR. If consent to the storage of cookies has been requested, processing takes place exclusively on the basis of this consent (Art. 6(1)(a) GDPR); consent can be revoked at any time.</p>

        <h3 class="legal-h3">Consent Management with Cookiebot</h3>
        <p class="legal-p">This website uses the consent management service Cookiebot by Usercentrics A/S, Havnegade 39, 1058 Copenhagen, Denmark. When you visit the website, your consent to the storage of certain cookies is obtained or the revocation of a previously given consent is made possible. Cookiebot stores a cookie to document your consent settings. The legal basis is Art. 6(1)(c) GDPR and our legitimate interest in the legally compliant use of cookies (Art. 6(1)(f) GDPR). Further information can be found in <a href="https://www.cookiebot.com/en/privacy-policy/" target="_blank" rel="noopener" class="legal-a">Cookiebot's privacy policy</a>.</p>
        <p class="legal-p">You can adjust or revoke your consent at any time via the cookie icon or cookie banner.</p>

        <h3 class="legal-h3">Cookie Overview</h3>
        <p class="legal-p">A current overview of all cookies used on this website is available at any time via the cookie banner. Click the cookie icon or "Cookie settings" link to view the list, adjust your consent or revoke it.</p>

        <h3 class="legal-h3">Contact Form (Netlify Forms)</h3>
        <p class="legal-p">If you contact us via the contact form on our website, the following data is collected: name, e-mail address, your message and, if applicable, telephone number and any other information you provide. This data is used exclusively to process your enquiry.</p>
        <p class="legal-p">Form data is submitted and processed via "Netlify Forms", a service of our hosting provider Netlify, Inc. (see section 2). Netlify stores the submitted form data on its servers and makes it available to us in the Netlify dashboard. The form uses a honeypot mechanism for spam protection.</p>
        <p class="legal-p">Processing is based on Art. 6(1)(b) GDPR (initiation of contract) and Art. 6(1)(f) GDPR (legitimate interest in efficient enquiry handling). The data will be deleted once your enquiry has been fully processed and there are no statutory retention obligations. A data processing agreement (DPA) is in place with Netlify.</p>

        <h3 class="legal-h3">Enquiries by E-mail or Telephone</h3>
        <p class="legal-p">If you contact us by e-mail or telephone, your enquiry including all resulting personal data (name, enquiry, contact details) will be stored and processed by us for the purpose of processing your request. We will not pass on this data without your consent.</p>
        <p class="legal-p">The processing of this data is based on Art. 6(1)(b) GDPR, where your enquiry is related to the performance of a contract, or on Art. 6(1)(f) GDPR. The data remains with us until you ask us to delete it or the purpose for the data storage ceases to apply.</p>

        <h3 class="legal-h3">Contact via WhatsApp</h3>
        <p class="legal-p">Our website contains links that allow you to contact us directly via WhatsApp. A connection to WhatsApp is only established when you actively click such a link. The service is provided by WhatsApp Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Ireland; the parent company is Meta Platforms, Inc., USA.</p>
        <p class="legal-p">When you send a message via WhatsApp, information such as your phone number, profile details and the content and time of the message are transmitted to WhatsApp. We have no influence over this data processing by WhatsApp. A transfer to third countries (in particular the USA) cannot be ruled out. Meta Platforms is certified under the "EU-US Data Privacy Framework" (DPF).</p>
        <p class="legal-p">The legal basis for offering this contact channel is Art. 6(1)(f) GDPR (legitimate interest in quick and low-threshold contact). The subsequent communication via WhatsApp is based on your consent under Art. 6(1)(a) GDPR, given by sending the message.</p>
        <p class="legal-p">Further information can be found in the <a href="https://www.whatsapp.com/legal/privacy-policy-eea" target="_blank" rel="noopener" class="legal-a">WhatsApp privacy policy</a>.</p>

        <h3 class="legal-h3">Server Log Files</h3>
        <p class="legal-p">The provider of the pages (Netlify) automatically collects and stores information in so-called server log files, which your browser automatically transmits:</p>
        <ul class="legal-ul">
          <li>Browser type and version</li>
          <li>Operating system used</li>
          <li>Referrer URL</li>
          <li>Hostname of the accessing computer</li>
          <li>Time of server request</li>
          <li>IP address</li>
        </ul>
        <p class="legal-p">This data is not combined with other data sources. The collection of this data is based on Art. 6(1)(f) GDPR (legitimate interest in technically faultless operation of the website).</p>

        <!-- 5 -->
        <h2 id="fonts" class="legal-h2"><span class="legal-num">5</span>Fonts and External Resources</h2>

        <h3 class="legal-h3">Google Fonts (Inter)</h3>
        <p class="legal-p">This website uses the "Inter" typeface, embedded externally as a Google Font, for consistent font rendering. The provider is Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland ("Google").</p>
        <p class="legal-p">When you visit our website, your browser loads the required fonts from Google's servers (fonts.googleapis.com and fonts.gstatic.com) in order to display texts and fonts correctly. For this purpose, the browser you use must establish a connection to Google's servers. Through this, Google becomes aware that our website has been accessed via your IP address. No cookies are stored in the process.</p>
        <p class="legal-p">The use of Google Fonts is in the interest of a uniform and appealing presentation of our online offerings. This constitutes a legitimate interest within the meaning of Art. 6(1)(f) GDPR. Google is certified under the "EU-US Data Privacy Framework" (DPF).</p>
        <p class="legal-p">Further information about Google Fonts: <a href="https://developers.google.com/fonts/faq" target="_blank" rel="noopener" class="legal-a">developers.google.com/fonts/faq</a> and the <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" class="legal-a">Google privacy policy</a>.</p>

        <h3 class="legal-h3">Material Symbols (Google)</h3>
        <p class="legal-p">We use the "Material Symbols Outlined" icon library, also provided by Google Ireland Limited and loaded externally from Google's servers (fonts.googleapis.com and fonts.gstatic.com). With regard to data processing, the same notes as for Google Fonts apply (see above).</p>

        <!-- 6 -->
        <h2 id="rights" class="legal-h2"><span class="legal-num">6</span>Your Rights</h2>
        <p class="legal-p">You have the following rights with regard to your personal data:</p>
        <div class="grid sm:grid-cols-2 gap-3 my-4">
          <div v-for="right in rights" :key="right.title" class="legal-card !mb-0 flex gap-3">
            <span class="material-symbols-outlined text-primary text-xl shrink-0">{{ right.icon }}</span>
            <div>
              <p class="font-bold text-on-surface text-sm">{{ right.title }} <span class="font-normal text-on-surface-variant/70">· {{ right.law }}</span></p>
              <p class="text-sm text-on-surface-variant leading-relaxed mt-0.5">{{ right.text }}</p>
            </div>
          </div>
        </div>
        <p class="legal-p">
          Competent supervisory authority:<br>
          Der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit<br>
          Ludwig-Erhard-Str. 22, 20459 Hamburg<br>
          <a href="https://www.datenschutz.hamburg.de" target="_blank" rel="noopener" class="legal-a">datenschutz.hamburg.de</a>
        </p>

        <!-- Contact callout -->
        <div class="mt-12 rounded-2xl bg-primary text-on-primary p-6 sm:p-8 text-center">
          <span class="material-symbols-outlined text-3xl mb-2 block">support_agent</span>
          <h3 class="font-display text-xl font-bold mb-1">Questions about data protection?</h3>
          <p class="text-on-primary/70 text-sm mb-5 max-w-md mx-auto">
            To exercise your rights or for any questions about your data, you can reach us at any time.
          </p>
          <a
            href="mailto:team@evolatec.de"
            class="inline-flex items-center gap-2 bg-white text-primary font-bold text-sm rounded-full px-6 py-3 hover:bg-white/90 transition-colors"
          >
            <span class="material-symbols-outlined text-base">mail</span>
            team@evolatec.de
          </a>
        </div>

      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
const { hreflangLinks } = useLanguageSwitcher();

useHead({
  title: 'Privacy Policy | EvolaTec',
  htmlAttrs: { lang: 'en' },
  meta: [
    { name: 'description', content: 'Privacy Policy of EvolaTec — information on the processing of personal data in accordance with GDPR.' },
    { name: 'robots', content: 'noindex, follow' },
  ],
  link: [
    { rel: 'canonical', href: 'https://evolatec.de/en/privacy-policy' },
    ...hreflangLinks.value,
  ],
});

const toc = [
  { id: 'overview', label: 'Privacy at a Glance' },
  { id: 'hosting', label: 'Hosting (Netlify)' },
  { id: 'general', label: 'General Information & Obligations' },
  { id: 'datacollection', label: 'Data Collection on This Website' },
  { id: 'fonts', label: 'Fonts and External Resources' },
  { id: 'rights', label: 'Your Rights' },
];

const rights = [
  { title: 'Access', law: 'Art. 15', icon: 'info', text: 'You can request information about your stored data.' },
  { title: 'Rectification', law: 'Art. 16', icon: 'edit', text: 'You can request the correction of inaccurate data.' },
  { title: 'Erasure', law: 'Art. 17', icon: 'delete', text: 'You can request the deletion of your data.' },
  { title: 'Restriction', law: 'Art. 18', icon: 'pause_circle', text: 'You can request the restriction of processing.' },
  { title: 'Data portability', law: 'Art. 20', icon: 'sync_alt', text: 'You can receive your data in a common format.' },
  { title: 'Objection', law: 'Art. 21', icon: 'block', text: 'You can object to the processing of your data.' },
];
</script>

<style scoped>
.legal-h2 {
  @apply flex items-center gap-3 font-display text-lg sm:text-xl font-bold text-on-surface mt-14 pt-7 border-t border-outline-variant/30 mb-4 scroll-mt-28;
}
.legal-num {
  @apply w-8 h-8 shrink-0 rounded-lg bg-primary text-on-primary text-sm font-black flex items-center justify-center;
}
.legal-h3 {
  @apply font-bold text-on-surface text-base mt-8 mb-2;
}
.legal-p {
  @apply text-sm text-on-surface-variant leading-relaxed mb-3;
}
.legal-ul {
  @apply list-disc pl-5 space-y-1.5 text-sm text-on-surface-variant leading-relaxed mb-3;
}
.legal-a {
  @apply text-primary font-medium hover:underline break-words;
}
.legal-card {
  @apply bg-surface-container-low rounded-xl p-5 my-4;
}
.legal-callout {
  @apply flex gap-4 bg-surface-container-low border-l-4 border-primary rounded-xl p-5 my-4;
}
</style>
