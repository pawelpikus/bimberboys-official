import Head from "next/head";
import styles from "../styles/RODOPolicyCookies.module.scss";
import React from "react";

const RODOPolicy = () => {
  return (
    <>
      <Head>
        <title>Bimber Boys - Polityka Prywatności</title>
      </Head>

      <div className={styles.content}>
        <h1 className={styles.title}>Polityka Cookies</h1>
        <ol className={styles.ol}>
          <li>
            Strona internetowa www.bimberboys.pl (zwana dalej “Stroną”) nie
            zbiera w sposób automatyczny żadnych informacji, z wyjątkiem
            informacji zawartych w plikach cookies.
          </li>
          <li>
            Pliki cookies (tzw. „ciasteczka”) stanowią dane informatyczne, w
            szczególności pliki tekstowe, które przechowywane są w urządzeniu
            końcowym Użytkownika Strony i przeznaczone są do korzystania z
            podstron internetowych Strony. Cookies zazwyczaj zawierają nazwę
            strony internetowej, z której pochodzą, czas przechowywania ich na
            urządzeniu końcowym oraz unikalny numer.
          </li>
          <li>
            Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika Strony
            pliki cookies oraz uzyskującym do nich dostęp jest operator Strony –
            Bimber Boys. z siedzibą ul. Wolności 39/59 22-100 Chełm. Pliki
            cookies wykorzystywane są w celu:
          </li>
          <ol type="a">
            <li>
              dostosowania zawartości stron internetowych Strony do preferencji
              Użytkownika oraz optymalizacji korzystania ze stron internetowych;
              w szczególności pliki te pozwalają rozpoznać urządzenie
              Użytkownika Strony i odpowiednio wyświetlić stronę internetową,
              dostosowaną do jego indywidualnych potrzeb;
            </li>
            <li>
              tworzenia statystyk, które pomagają zrozumieć, w jaki sposób
              Użytkownicy Strony korzystają ze stron internetowych, co umożliwia
              ulepszanie ich struktury i zawartości;
            </li>
            <li>
              utrzymanie sesji Użytkownika Strony (po zalogowaniu), dzięki
              której Użytkownik nie musi na każdej podstronie Strony ponownie
              wpisywać loginu i hasła;
            </li>
          </ol>
          <li>
            W ramach Strony stosowane są dwa zasadnicze rodzaje plików cookies:
            „sesyjne” (session cookies) oraz „stałe” (persistent cookies).
            Cookies „sesyjne” są plikami tymczasowymi, które przechowywane są w
            urządzeniu końcowym Użytkownika do czasu wylogowania, opuszczenia
            strony internetowej lub wyłączenia oprogramowania (przeglądarki
            internetowej). „Stałe” pliki cookies przechowywane są w urządzeniu
            końcowym Użytkownika przez czas określony w parametrach plików
            cookies lub do czasu ich usunięcia przez Użytkownika.
          </li>
          <li>
            W ramach Strony stosowane są następujące rodzaje plików cookies:
          </li>
          <ol type="a">
            <li>
              &quot;niezbędne&quot; pliki cookies, umożliwiające korzystanie z
              usług dostępnych w ramach Strony, np. uwierzytelniające pliki
              cookies wykorzystywane do usług wymagających uwierzytelniania w
              ramach Strony;
            </li>
            <li>
              pliki cookies służące do zapewnienia bezpieczeństwa, np.
              wykorzystywane do wykrywania nadużyć w zakresie uwierzytelniania w
              ramach Strony;
            </li>
            <li>
              &quot;wydajnościowe&quot; pliki cookies, umożliwiające zbieranie
              informacji o sposobie korzystania ze stron internetowych Strony;
            </li>
            <li>
              &quot;funkcjonalne&quot; pliki cookies, umożliwiające
              „zapamiętanie” wybranych przez Użytkownika ustawień i
              personalizację interfejsu Użytkownika, np. w zakresie wybranego
              języka lub regionu, z którego pochodzi Użytkownik, rozmiaru
              czcionki, wyglądu strony internetowej itp.;
            </li>
            <li>
              &quot;reklamowe&quot; pliki cookies, umożliwiające dostarczanie
              Użytkownikom treści reklamowych bardziej dostosowanych do ich
              zainteresowań.
            </li>
          </ol>

          <li>
            W wielu przypadkach oprogramowanie służące do przeglądania stron
            internetowych (przeglądarka internetowa) domyślnie dopuszcza
            przechowywanie plików cookies w urządzeniu końcowym Użytkownika.
            Użytkownicy Strony mogą dokonać w każdym czasie zmiany ustawień
            dotyczących plików cookies. Ustawienia te mogą zostać zmienione w
            szczególności w taki sposób, aby blokować automatyczną obsługę
            plików cookies w ustawieniach przeglądarki internetowej bądź
            informować o ich każdorazowym zamieszczeniu w urządzeniu Użytkownika
            Strony. Szczegółowe informacje o możliwości i sposobach obsługi
            plików cookies dostępne są w ustawieniach oprogramowania
            (przeglądarki internetowej).
          </li>
          <li>
            Operator Strony informuje, że ograniczenia stosowania plików cookies
            mogą wpłynąć na niektóre funkcjonalności dostępne na stronach
            internetowych Strony.
          </li>
          <li>
            Pliki cookies zamieszczane w urządzeniu końcowym Użytkownika Strony
            i wykorzystywane mogą być również przez współpracujących z
            operatorem Strony reklamodawców oraz partnerów.
          </li>
          <li>
            Więcej informacji na temat plików cookies dostępnych jest w sekcji
            „Pomoc” w menu przeglądarki internetowej.
          </li>
          <li>
            <p style={{ display: "inline", margin: "4px" }}>
              Powyższy wzór polityki cookies chroniony jest prawem autorskim,
              które przysługują IAB Polska. Źródło:
            </p>
            <a className={styles.a} href="http://wszystkoociasteczkach.pl/">
              wszystkoociasteczkach.pl
            </a>
          </li>
        </ol>
      </div>
    </>
  );
};

export default RODOPolicy;
