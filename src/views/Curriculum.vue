<template>
  <div>
    <div class="w-full h-56 bg-gray-600"></div>
    <section>
      <header>
        <h2>About Me</h2>
      </header>
      <p>
        Phosfluorescently incubate 24/7 innovation without standards compliant alignments. Professi
        onally communicate
        functionalized action items without client-centric deliverables. Globally parallel task alte
        rnative portals vis-a-vis
        alternative leadership skills. Energistically develop low-risk high-yield synergy and granul
        ar catalysts for change.
        Credibly recaptiualize synergistic customer service rather than tactical outsourcing.
        Dynamically productize timely partnerships and inexpensive services. Seamlessly impact lon
        g-term high-impact metrics whereas
        robust best practices. Phosfluorescently transform multimedia based quality vectors after
        holistic manufactured products. Continually conceptualize compelling technology and ubiquito
        ROI. Credibly innovate resource-leveling relationships after ethical paradigms.
        Objectively enhance fully researched markets for bricks-and-clicks e-tailers. Phosfluorescen
        ance timely mindshare whereas vertical
        interfaces. Competently fashion interdependent technologies before high standards in ROI. Gl
        productize inexpensive bandwidth with
        distributed information. Phosfluorescently maintain viral innovation with flexible methods
        werment.

          Collaboratively.
      </p>
    </section>

    <section>
      <header>
        <h2>Work experience</h2>
      </header>
      <ol class="mx-auto">
        <li class="flex justify-center">
          <div class="text-right">
            <h3 class="font-bold text-lg text-green-600">This is the Job Title</h3>
            <p>The Company</p>
            <time datetime="2010-09">Sep 2019</time> - <time datetime="2021-08">Today</time>
          </div>
          <ul class="border-l ml-4 pl-4 border-green-500 text-left">
            <li class="chevron-bullet">Development methodology: Waterfall</li>
            <li class="chevron-bullet">Integration Testing w/Cypress</li>
            <li class="chevron-bullet">UI / UX improvements</li>
            <li class="chevron-bullet">Technology migrations</li>
          </ul>
        </li>
      </ol>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Curriculum',
};
</script>

<style>
  .chevron-bullet::before {
    content: ">";
    padding-right: 5px;
    color: var(--color-primary);
  }
</style>
