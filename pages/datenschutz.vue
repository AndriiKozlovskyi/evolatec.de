<template>
  <div class="bg-surface-container-low">

    <!-- Header band -->
    <section class="bg-primary text-on-primary">
      <div class="max-w-3xl mx-auto px-gutter py-14 md:py-20 text-center">
        <div class="inline-flex w-14 h-14 rounded-2xl bg-white/10 items-center justify-center mb-5">
          <span class="material-symbols-outlined text-[1.9rem]">shield_person</span>
        </div>
        <h1 class="font-display text-3xl md:text-4xl font-black mb-3">Datenschutzerklärung</h1>
        <p class="text-on-primary/70 max-w-lg mx-auto leading-relaxed">
          Transparenz darüber, welche Daten wir verarbeiten — und warum. Ihr Vertrauen ist die Grundlage unserer Arbeit.
        </p>
        <span class="inline-block mt-6 text-xs font-bold uppercase tracking-[0.15em] bg-white/10 rounded-full px-4 py-1.5">
          Stand: Mai 2026
        </span>
      </div>
    </section>

    <!-- Content -->
    <div class="max-w-3xl mx-auto px-gutter pb-16 md:pb-24 -mt-10">
      <article class="bg-white rounded-2xl border border-outline-variant/20 shadow-sm p-6 sm:p-10">

        <!-- Table of contents -->
        <nav class="bg-surface-container-low rounded-xl p-5 sm:p-6 mb-12" aria-label="Inhaltsverzeichnis">
          <p class="font-bold text-on-surface text-sm mb-4">Inhaltsverzeichnis</p>
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
        <h2 id="blick" class="legal-h2"><span class="legal-num">1</span>Datenschutz auf einen Blick</h2>

        <h3 class="legal-h3">Allgemeine Hinweise</h3>
        <p class="legal-p">Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>

        <h3 class="legal-h3">Datenerfassung auf dieser Website</h3>
        <p class="legal-p"><strong class="text-on-surface">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br>
        Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.</p>

        <p class="legal-p"><strong class="text-on-surface">Wie erfassen wir Ihre Daten?</strong><br>
        Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).</p>

        <p class="legal-p"><strong class="text-on-surface">Wofür nutzen wir Ihre Daten?</strong><br>
        Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Sofern über die Website Verträge geschlossen oder angebahnt werden können, werden die übermittelten Daten auch für Vertragsangebote, Bestellungen oder sonstige Auftragsanfragen verarbeitet.</p>

        <p class="legal-p"><strong class="text-on-surface">Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br>
        Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.</p>

        <h3 class="legal-h3">Analyse-Tools und Tools von Drittanbietern</h3>
        <p class="legal-p">Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen. Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.</p>

        <!-- 2 -->
        <h2 id="hosting" class="legal-h2"><span class="legal-num">2</span>Hosting (Netlify)</h2>
        <p class="legal-p">Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>

        <h3 class="legal-h3">Netlify</h3>
        <p class="legal-p">
          Netlify, Inc.<br>
          512 2nd Street, Suite 200<br>
          San Francisco, CA 94107, USA<br><br>
          Website: <a href="https://www.netlify.com" target="_blank" rel="noopener" class="legal-a">www.netlify.com</a><br>
          Datenschutzerklärung: <a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener" class="legal-a">netlify.com/privacy</a>
        </p>
        <p class="legal-p">Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern von Netlify gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.</p>
        <p class="legal-p">Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar.</p>
        <p class="legal-p">Netlify ist nach dem „EU-US Data Privacy Framework“ (DPF) zertifiziert, welches die Einhaltung europäischer Datenschutzstandards bei Datenverarbeitungen in den USA gewährleistet.</p>
        <p class="legal-p">Wir haben mit Netlify einen Vertrag über Auftragsverarbeitung (AVV) abgeschlossen. Netlify verarbeitet Ihre Daten nur insoweit, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist.</p>

        <!-- 3 -->
        <h2 id="allgemein" class="legal-h2"><span class="legal-num">3</span>Allgemeine Hinweise und Pflichtinformationen</h2>

        <h3 class="legal-h3">Datenschutz</h3>
        <p class="legal-p">Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
        <p class="legal-p">Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>

        <h3 class="legal-h3">Hinweis zur verantwortlichen Stelle</h3>
        <p class="legal-p">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
        <div class="legal-card">
          <p class="font-bold text-on-surface mb-1">Maksym Streltsov</p>
          <p class="text-sm text-on-surface-variant leading-relaxed">
            Desenißstraße 14<br>
            22083 Hamburg, Deutschland
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
        <p class="legal-p">Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.</p>

        <h3 class="legal-h3">Speicherdauer</h3>
        <p class="legal-p">Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.</p>

        <h3 class="legal-h3">Allgemeine Hinweise zu den Rechtsgrundlagen</h3>
        <p class="legal-p">Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO. Sind Ihre Daten zur Vertragserfüllung erforderlich, verarbeiten wir Ihre Daten auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen.</p>

        <h3 class="legal-h3">Empfänger von personenbezogenen Daten</h3>
        <p class="legal-p">Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich. Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind, wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt.</p>

        <h3 class="legal-h3">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
        <p class="legal-p">Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p>

        <h3 class="legal-h3">Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3>
        <div class="legal-callout">
          <span class="material-symbols-outlined text-primary text-xl shrink-0">gavel</span>
          <div class="space-y-3 text-xs leading-relaxed text-on-surface-variant font-medium">
            <p>WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).</p>
            <p>WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).</p>
          </div>
        </div>

        <h3 class="legal-h3">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
        <p class="legal-p">Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde zu. Die zuständige Behörde für Hamburg ist:</p>
        <p class="legal-p">
          Der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit<br>
          Ludwig-Erhard-Str. 22, 20459 Hamburg<br>
          <a href="https://www.datenschutz.hamburg.de" target="_blank" rel="noopener" class="legal-a">datenschutz.hamburg.de</a>
        </p>

        <h3 class="legal-h3">Recht auf Datenübertragbarkeit</h3>
        <p class="legal-p">Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen.</p>

        <h3 class="legal-h3">SSL- bzw. TLS-Verschlüsselung</h3>
        <p class="legal-p">Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.</p>

        <h3 class="legal-h3">Recht auf Einschränkung der Verarbeitung</h3>
        <p class="legal-p">Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:</p>
        <ul class="legal-ul">
          <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten</li>
          <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht</li>
          <li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung von Rechtsansprüchen benötigen</li>
          <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben</li>
        </ul>

        <!-- 4 -->
        <h2 id="datenerfassung" class="legal-h2"><span class="legal-num">4</span>Datenerfassung auf dieser Website</h2>

        <h3 class="legal-h3">Cookies</h3>
        <p class="legal-p">Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht.</p>
        <p class="legal-p">Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen stammen (Third-Party-Cookies). Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs erforderlich sind (notwendige Cookies), werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Sofern eine Einwilligung zur Speicherung von Cookies abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG); die Einwilligung ist jederzeit widerrufbar.</p>

        <h3 class="legal-h3">Consent-Management mit Cookiebot</h3>
        <p class="legal-p">Diese Website nutzt den Consent-Management-Dienst Cookiebot der Usercentrics A/S, Havnegade 39, 1058 Kopenhagen, Dänemark. Beim Aufruf der Website wird Ihre Einwilligung zur Speicherung bestimmter Cookies eingeholt bzw. der Widerruf einer bereits erteilten Einwilligung ermöglicht. Cookiebot speichert hierzu einen Cookie, um Ihre Einwilligungseinstellungen zu dokumentieren. Rechtsgrundlage ist Art. 6 Abs. 1 lit. c DSGVO sowie unser berechtigtes Interesse an einem rechtskonformen Einsatz von Cookies (Art. 6 Abs. 1 lit. f DSGVO). Weitere Informationen finden Sie in der <a href="https://www.cookiebot.com/de/privacy-policy/" target="_blank" rel="noopener" class="legal-a">Datenschutzerklärung von Cookiebot</a>.</p>
        <p class="legal-p">Ihre Einwilligung können Sie jederzeit über das Cookie-Symbol bzw. den Cookie-Banner anpassen oder widerrufen.</p>

        <h3 class="legal-h3">Cookie-Übersicht</h3>
        <p class="legal-p">Die folgende, automatisch durch Cookiebot erstellte Übersicht zeigt alle auf dieser Website eingesetzten Cookies:</p>
        <CookieDeclaration class="mt-3" />

        <h3 class="legal-h3">Kontaktformular</h3>
        <p class="legal-p">Wenn Sie uns über das Kontaktformular auf unserer Website kontaktieren, werden folgende Daten erhoben: Name, E-Mail-Adresse, Ihre Nachricht sowie ggf. Telefonnummer. Diese Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet und nicht an Dritte weitergegeben.</p>
        <p class="legal-p">Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) sowie Art. 6 Abs. 1 lit. f DSGVO. Die Daten werden gelöscht, sobald Ihre Anfrage abschließend bearbeitet wurde und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</p>

        <h3 class="legal-h3">Anfrage per E-Mail oder Telefon</h3>
        <p class="legal-p">Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
        <p class="legal-p">Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt, oder auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Die Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern oder der Zweck für die Datenspeicherung entfällt.</p>

        <h3 class="legal-h3">Server-Log-Dateien</h3>
        <p class="legal-p">Der Provider der Seiten (Netlify) erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch übermittelt:</p>
        <ul class="legal-ul">
          <li>Browsertyp und Browserversion</li>
          <li>verwendetes Betriebssystem</li>
          <li>Referrer URL</li>
          <li>Hostname des zugreifenden Rechners</li>
          <li>Uhrzeit der Serveranfrage</li>
          <li>IP-Adresse</li>
        </ul>
        <p class="legal-p">Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Die Logfiles werden nach spätestens 30 Tagen gelöscht.</p>

        <!-- 5 -->
        <h2 id="analytics" class="legal-h2"><span class="legal-num">5</span>Google Analytics</h2>
        <p class="legal-p">Diese Website nutzt Google Analytics, einen Webanalysedienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.</p>
        <p class="legal-p">Google Analytics verwendet Cookies, die eine Analyse der Benutzung der Website ermöglichen. Die durch Cookies erzeugten Informationen über Ihre Nutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Wir haben die IP-Anonymisierung aktiviert, sodass Ihre IP-Adresse von Google innerhalb der Europäischen Union gekürzt wird.</p>
        <p class="legal-p">Google Analytics wird nur nach Ihrer ausdrücklichen Einwilligung über unser Cookie-Banner aktiviert. Sie können Ihre Einwilligung jederzeit widerrufen.</p>
        <p class="legal-p">Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG.<br>
        Weitere Informationen: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" class="legal-a">policies.google.com/privacy</a></p>
        <p class="legal-p">Sie können die Erfassung durch Google Analytics verhindern, indem Sie das Browser-Add-on zur Deaktivierung installieren: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener" class="legal-a">tools.google.com/dlpage/gaoptout</a></p>
        <p class="legal-p">Google ist nach dem „EU-US Data Privacy Framework“ (DPF) zertifiziert: <a href="https://www.dataprivacyframework.gov/participant/5780" target="_blank" rel="noopener" class="legal-a">dataprivacyframework.gov</a></p>

        <!-- 6 -->
        <h2 id="googleads" class="legal-h2"><span class="legal-num">6</span>Google Ads &amp; Remarketing</h2>
        <p class="legal-p">Diese Website nutzt Google Ads, einen Online-Werbedienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Mithilfe von Google Ads schalten wir Werbeanzeigen in der Google-Suche und auf Partnerwebsites. Google Remarketing ermöglicht es uns, Nutzern, die unsere Website bereits besucht haben, gezielt Werbung anzuzeigen.</p>
        <p class="legal-p">Dabei werden Cookies und ähnliche Technologien eingesetzt. Google Ads und Remarketing werden nur nach Ihrer ausdrücklichen Einwilligung über unser Cookie-Banner aktiviert.</p>
        <p class="legal-p">Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG.<br>
        Weitere Informationen: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" class="legal-a">policies.google.com/privacy</a></p>
        <p class="legal-p">Sie können personalisierte Werbung in den Google-Einstellungen deaktivieren: <a href="https://adssettings.google.com" target="_blank" rel="noopener" class="legal-a">adssettings.google.com</a></p>

        <!-- 7 -->
        <h2 id="plugins" class="legal-h2"><span class="legal-num">7</span>Plugins und Tools</h2>

        <h3 class="legal-h3">Google Fonts (lokal eingebunden)</h3>
        <p class="legal-p">Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten Google Fonts. Die Google Fonts sind lokal installiert. Eine Verbindung zu Servern von Google findet dabei nicht statt.</p>
        <p class="legal-p">Weitere Informationen zu Google Fonts finden Sie unter <a href="https://developers.google.com/fonts/faq" target="_blank" rel="noopener" class="legal-a">developers.google.com/fonts/faq</a>.</p>

        <!-- 8 -->
        <h2 id="rechte" class="legal-h2"><span class="legal-num">8</span>Ihre Rechte</h2>
        <p class="legal-p">Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
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
          Zuständige Aufsichtsbehörde:<br>
          Der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit<br>
          Ludwig-Erhard-Str. 22, 20459 Hamburg<br>
          <a href="https://www.datenschutz.hamburg.de" target="_blank" rel="noopener" class="legal-a">datenschutz.hamburg.de</a>
        </p>

        <!-- Contact callout -->
        <div class="mt-12 rounded-2xl bg-primary text-on-primary p-6 sm:p-8 text-center">
          <span class="material-symbols-outlined text-3xl mb-2 block">support_agent</span>
          <h3 class="font-display text-xl font-bold mb-1">Fragen zum Datenschutz?</h3>
          <p class="text-on-primary/70 text-sm mb-5 max-w-md mx-auto">
            Zur Ausübung Ihrer Rechte oder bei Fragen rund um Ihre Daten erreichen Sie uns jederzeit.
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
  title: 'Datenschutzerklärung | EvolaTec',
  meta: [
    { name: 'description', content: 'Datenschutzerklärung der EvolaTec — Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.' },
    { name: 'robots', content: 'noindex, follow' },
  ],
  link: [
    { rel: 'canonical', href: 'https://evolatec.de/datenschutz' },
    ...hreflangLinks.value,
  ],
});

const toc = [
  { id: 'blick', label: 'Datenschutz auf einen Blick' },
  { id: 'hosting', label: 'Hosting (Netlify)' },
  { id: 'allgemein', label: 'Allgemeine Hinweise & Pflichten' },
  { id: 'datenerfassung', label: 'Datenerfassung auf dieser Website' },
  { id: 'analytics', label: 'Google Analytics' },
  { id: 'googleads', label: 'Google Ads & Remarketing' },
  { id: 'plugins', label: 'Plugins und Tools' },
  { id: 'rechte', label: 'Ihre Rechte' },
];

const rights = [
  { title: 'Auskunft', law: 'Art. 15', icon: 'info', text: 'Sie können Auskunft über Ihre gespeicherten Daten verlangen.' },
  { title: 'Berichtigung', law: 'Art. 16', icon: 'edit', text: 'Sie können die Berichtigung unrichtiger Daten verlangen.' },
  { title: 'Löschung', law: 'Art. 17', icon: 'delete', text: 'Sie können die Löschung Ihrer Daten verlangen.' },
  { title: 'Einschränkung', law: 'Art. 18', icon: 'pause_circle', text: 'Sie können die Einschränkung der Verarbeitung verlangen.' },
  { title: 'Datenübertragbarkeit', law: 'Art. 20', icon: 'sync_alt', text: 'Sie können Ihre Daten in einem gängigen Format erhalten.' },
  { title: 'Widerspruch', law: 'Art. 21', icon: 'block', text: 'Sie können der Verarbeitung Ihrer Daten widersprechen.' },
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
