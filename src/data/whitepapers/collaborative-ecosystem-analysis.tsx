export default function CollaborativeEcosystemAnalysis() {
  return (
    <>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
        Collaborative Ecosystem Analysis: Reimagining Muslim Digital Innovation
      </h1>

      <p className="italic mb-6 text-gray-600 dark:text-gray-400">
        A Muslim Open Source Foundation (MOSF) White Paper – Draft v1.0
      </p>

      <hr className="my-8 border-gray-300 dark:border-gray-700" />

      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
        Executive Summary
      </h2>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        Across the world, Muslim technologists are building event platforms, education tools, fintech products, Qur'an apps, AI assistants, and more. Talent, passion, and sincere intention are abundant. Yet the ummah still faces fragmented solutions, duplicated effort, and fragile projects that struggle to sustain themselves.
      </p>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        Most founders inherit a mental model from conventional startup culture: do a competitive analysis, identify gaps and weaknesses, capture market share, and eventually dominate the category. This mindset may work in large, capital rich markets. In emerging Muslim digital ecosystems that are small in absolute size, underfunded, and deeply values driven, it often leads to burnout, waste, and under-serving users.
      </p>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        This white paper proposes an alternative frame: <strong className="font-bold text-gray-900 dark:text-white">Collaborative Ecosystem Analysis (CEA)</strong>. Instead of asking how to defeat other Muslim products, CEA asks how we can:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300 ml-4">
        <li className="leading-relaxed">Map the ecosystem of tools and organizations around a real problem</li>
        <li className="leading-relaxed">Understand the distinct strengths and limitations of different teams</li>
        <li className="leading-relaxed">Identify where offerings complement rather than duplicate each other</li>
        <li className="leading-relaxed">Design collaboration patterns and shared infrastructure</li>
        <li className="leading-relaxed">Serve the ummah better, while allowing multiple projects to thrive</li>
      </ul>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        CEA is grounded in established strategic ideas such as co-opetition, ecosystem thinking, and collaborative advantage, and it is explicitly guided by Islamic principles of cooperation in good, justice, and avoiding harmful monopolies. It provides Muslim founders, organizations, and donors with a practical framework to move from zero sum competition to shared, long term value creation.
      </p>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        As a neutral, open source, nonprofit organization, the <strong className="font-bold text-gray-900 dark:text-white">Muslim Open Source Foundation (MOSF)</strong> is uniquely positioned to develop, steward, and disseminate this framework. MOSF can serve as a backbone organization for Muslim tech ecosystems; convening founders, maintaining shared components and standards, and anchoring collaboration in both technical excellence and Islamic ethics.
      </p>

      <hr className="my-8 border-gray-300 dark:border-gray-700" />

      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
        1. The Problem: Fragmentation, Duplication, and Underserving the Ummah
      </h2>

      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 mt-6">
        1.1 A wave of Muslim digital products
      </h3>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        Over the last decade, we have seen a rapid increase in:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300 ml-4">
        <li className="leading-relaxed">Muslim event management platforms</li>
        <li className="leading-relaxed">Zakat and sadaqah apps</li>
        <li className="leading-relaxed">Halal fintech and personal finance tools</li>
        <li className="leading-relaxed">Qur'an and Islamic learning platforms</li>
        <li className="leading-relaxed">Arabic learning and literacy tools</li>
        <li className="leading-relaxed">AI powered Islamic question and answer services</li>
        <li className="leading-relaxed">Community management and masjid tools</li>
        <li className="leading-relaxed">Health and wellness apps for Muslims</li>
      </ul>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        These efforts are encouraging. Each founder sees a gap and tries to fill it. Collectively, they reflect a generation that wants to build with its own hands instead of waiting for others to solve its problems.
      </p>

      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 mt-6">
        1.2 Fragmentation and duplication
      </h3>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        However, the current pattern carries costs.
      </p>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        Common issues include:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300 ml-4">
        <li className="leading-relaxed">Several teams building similar products with slightly different branding</li>
        <li className="leading-relaxed">Rebuilding the same infrastructure privately: prayer time engines, payment flows, authentication, basic content management, curriculum blocks</li>
        <li className="leading-relaxed">Products that cannot talk to each other, which forces users to juggle many disconnected systems</li>
        <li className="leading-relaxed">Confusing landscapes where masajid, schools, and individuals do not know which platform to trust</li>
        <li className="leading-relaxed">Fragile, single founder projects that depend on one person's health, energy, and finances</li>
      </ul>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        When every team works in isolation, an already limited pool of capital, talent, and attention is split into smaller and smaller slices. Everyone struggles and the overall user experience remains weaker than it could be.
      </p>

      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 mt-6">1.3 Hidden opportunity cost</h3>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">The harm is not only visible projects that fail. The deeper loss is:</p>

      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300 ml-4">
        <li className="leading-relaxed">Time and energy that could have gone into differentiation and excellence, instead spent reinventing basic components</li>
        <li className="leading-relaxed">A lack of interoperability that prevents seamless user journeys across tools</li>
        <li className="leading-relaxed">Lost chances to pool data, insight, and community feedback in privacy respecting ways</li>
        <li className="leading-relaxed">Reduced ability to negotiate fairer terms with vendors or regulators because each actor is small and isolated</li>
      </ul>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        The ummah ends up with many similar, relatively shallow solutions instead of a cohesive ecosystem with depth, resilience, and quality.
      </p>

      <hr className="my-8 border-gray-300 dark:border-gray-700" />

      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 mt-8">2. How Traditional Competitive Analysis Falls Short in Ummah-Focused Work</h2>

      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 mt-6">2.1 The assumptions behind competitive analysis</h3>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        For over four decades, competitive frameworks have defined how organizations, including tech startups and digital platforms, approach strategy. Michael Porter's Five Forces model (1979) analyzes competitive threats: rivalry among existing competitors, threat of new entrants, bargaining power of suppliers and buyers, and threat of substitutes. Success means finding defensible positions, building barriers to entry, and capturing market share by positioning strengths against competitors' weaknesses.
      </p>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        Even frameworks that claim to transcend competition maintain competitive assumptions. W. Chan Kim and Renée Mauborgne's Blue Ocean Strategy encourages creating "uncontested market space" rather than competing in "red oceans." Yet the goal remains individual organizational success—you win by making competitors irrelevant, creating your own market to dominate. The language shifts from "beat competitors" to "make them irrelevant," but the underlying logic of individual firm advantage persists.
      </p>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        In the tech and startup world, this competitive thinking is foundational. Founders are taught to identify competitors, analyze market gaps, achieve product-market fit, and scale toward market dominance. Startup accelerators, venture capital pitches, and entrepreneurship programs center these questions: "Who are your competitors? What's your competitive advantage? How big is your total addressable market? How will you win this category?"
      </p>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        This logic has shaped how Muslim tech founders approach building digital products. Even founders motivated by serving the ummah and earning sadaqah jariyah often instinctively apply these frameworks—analyzing which other Muslim apps might be "competitors," thinking about how to "capture" users, protecting technical solutions as proprietary advantages. These instincts arise not from ill intent but from how digital entrepreneurship is taught and practiced globally.
      </p>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        For Muslim digital ecosystems, this creates a subtle but profound challenge. Founders bring sincere intentions to serve the ummah, but may unconsciously apply strategic frameworks designed for venture-backed startups in large, capital-rich markets—frameworks that weren't built for, and may not align with, Islamic principles or resource-constrained, mission-driven contexts.
      </p>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">Standard startup playbooks teach founders to:</p>

      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300 ml-4">
        <li className="leading-relaxed">Identify direct competitors</li>
        <li className="leading-relaxed">Analyze their strengths and weaknesses</li>
        <li className="leading-relaxed">Look for exploitable gaps in pricing, features, or positioning</li>
        <li className="leading-relaxed">Capture market share</li>
        <li className="leading-relaxed">Move toward category dominance</li>
      </ul>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">This approach assumes that:</p>

      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300 ml-4">
        <li className="leading-relaxed">Markets are large enough to sustain intense head to head rivalry</li>
        <li className="leading-relaxed">Capital is abundant and will reward rapid growth and dominance</li>
        <li className="leading-relaxed">The primary measure of success is financial return</li>
        <li className="leading-relaxed">Harm to competitors is acceptable as long as it is legal</li>
      </ul>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">In many Muslim majority and minority contexts, these assumptions do not hold.</p>

      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 mt-6">2.2 Why this logic is misaligned in Muslim digital ecosystems</h3>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">Muslim digital markets often have:</p>

      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300 ml-4">
        <li className="leading-relaxed">Limited access to capital, especially values aligned capital</li>
        <li className="leading-relaxed">Scarcity of experienced technical and product talent</li>
        <li className="leading-relaxed">Significant trust and reputation barriers</li>
        <li className="leading-relaxed">Smaller addressable markets in purely financial terms</li>
        <li className="leading-relaxed">Strong mission driven motivations beyond profit</li>
      </ul>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">In this environment, aggressive zero sum competition can:</p>

      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300 ml-4">
        <li className="leading-relaxed">Exhaust founders who are already operating with thin margins</li>
        <li className="leading-relaxed">Create unnecessary duplication of effort and infrastructure</li>
        <li className="leading-relaxed">Discourage collaboration even when it would benefit everyone</li>
        <li className="leading-relaxed">Lead to pricing and marketing tactics that undermine trust</li>
        <li className="leading-relaxed">Push teams toward questionable revenue models that compromise ethics</li>
      </ul>

      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 mt-6">2.3 Spiritual and ethical misalignment</h3>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        Beyond practical concerns, an adversarial view of other Muslim builders sits uneasily with Islamic ethics.
      </p>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">Our tradition encourages:</p>

      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300 ml-4">
        <li className="leading-relaxed">Cooperation in righteous causes</li>
        <li className="leading-relaxed">Avoidance of oppressive practices, including harmful monopolies</li>
        <li className="leading-relaxed">Fair dealing and transparency</li>
        <li className="leading-relaxed">Removal of hardship from others</li>
      </ul>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        A mindset that celebrates the collapse of another sincere Muslim effort, simply because it was a "competitor," is spiritually dangerous and strategically short sighted. It risks turning tools that should be instruments of khayr into instruments of ego and rivalry.
      </p>

      <hr className="my-8 border-gray-300 dark:border-gray-700" />

      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 mt-8">3. Introducing Collaborative Ecosystem Analysis (CEA)</h2>

      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 mt-6">3.1 Definition</h3>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        <strong className="font-bold text-gray-900 dark:text-white">Collaborative Ecosystem Analysis (CEA)</strong> is a structured approach to understanding and shaping a domain of Muslim digital innovation so that:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300 ml-4">
        <li className="leading-relaxed">Multiple projects can coexist and reinforce each other</li>
        <li className="leading-relaxed">Founders and organizations can specialize where they add unique value</li>
        <li className="leading-relaxed">Shared infrastructure and standards reduce duplication and cost</li>
        <li className="leading-relaxed">Users experience a more coherent, higher quality landscape of tools</li>
        <li className="leading-relaxed">The overall outcome aligns with Islamic ethical principles</li>
      </ul>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        CEA does not replace competitive analysis entirely. Understanding other offerings and market forces remains important. Instead, CEA reframes the primary question. Rather than asking "how do we win against them," it asks "how do we design an ecosystem where we each serve best, and the ummah as a whole benefits more."
      </p>

      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 mt-6">3.2 Core inputs to CEA</h3>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">CEA draws on several types of information and perspectives:</p>

      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300 ml-4">
        <li className="leading-relaxed"><strong>Ecosystem mapping</strong>: who exists in this space, what they offer, and who they serve</li>
        <li className="leading-relaxed"><strong>Strength and weakness profiles</strong>: what each team does well and where they are constrained</li>
        <li className="leading-relaxed"><strong>Complementarity</strong>: where products, services, or organizations naturally fit together</li>
        <li className="leading-relaxed"><strong>Mission alignment</strong>: the shared higher level objectives that transcend any single product</li>
        <li className="leading-relaxed"><strong>Islamic ethics</strong>: principles that define acceptable boundaries and preferred patterns</li>
        <li className="leading-relaxed"><strong>Open source and technical patterns</strong>: opportunities for shared components, protocols, and standards</li>
      </ul>

      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 mt-6">3.3 Relationship to existing strategy concepts</h3>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">CEA stands on the shoulders of several established ideas:</p>

      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300 ml-4">
        <li className="leading-relaxed">Co-opetition; collaborating with competitors in some areas while competing in others</li>
        <li className="leading-relaxed">Collaborative advantage; the idea that an organization's edge can come from its ability to partner effectively</li>
        <li className="leading-relaxed">Ecosystem and platform thinking; recognizing that value is created across networks of actors, not by a single firm in isolation</li>
        <li className="leading-relaxed">Collective impact; structured multi actor collaboration toward a shared social outcome</li>
      </ul>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        CEA adapts and integrates these concepts in a specifically Muslim, open source, digital context. It is deliberately built around the realities of resource constrained, mission driven innovation rather than large scale commercial environments.
      </p>

      <hr className="my-8 border-gray-300 dark:border-gray-700" />

      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 mt-8">4. The CEA Framework (MOSF v1.0)</h2>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        The CEA framework can be thought of as a five phase process that founders, organizations, and donors can use to understand a domain and identify constructive collaboration opportunities.
      </p>

      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 mt-6">4.1 Phase 1: Ecosystem Mapping</h3>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed"><strong>Objective:</strong> build a shared picture of "who is doing what" in a given space.</p>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">Activities may include:</p>

      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300 ml-4">
        <li className="leading-relaxed">Listing products, platforms, and organizations addressing a particular need, such as events, zakat, youth education, or Arabic literacy</li>
        <li className="leading-relaxed">Categorizing them by geography, language, target segment, and maturity</li>
        <li className="leading-relaxed">Identifying shared infrastructure elements that appear across solutions, for example authentication, payments, content storage, prayer time calculation, or messaging</li>
        <li className="leading-relaxed">Highlighting adjacent actors such as NGOs, regulators, scholars, and infrastructure providers</li>
      </ul>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed"><strong>Deliverable:</strong> an ecosystem map that shows the main actors, their roles, and their relationships.</p>

      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 mt-6">4.2 Phase 2: Strength and Weakness Alignment</h3>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed"><strong>Objective:</strong> understand complementary strengths and constraints.</p>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        This phase is not about exposing weaknesses in order to exploit them. It is about honest assessment in service of better alignment.
      </p>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">Questions to explore:</p>

      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300 ml-4">
        <li className="leading-relaxed">Where does each team excel, such as user experience, on the ground relationships, open source contributions, data analysis, community engagement, or regulatory navigation</li>
        <li className="leading-relaxed">Where is each team constrained, such as infrastructure maintenance capacity, language coverage, fundraising, or enterprise sales</li>
        <li className="leading-relaxed">Which strengths map naturally to other teams' weaknesses, and vice versa</li>
      </ul>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed"><strong>Deliverable:</strong> a set of profiles that describe what each actor is best at, and where collaboration might reduce their burden.</p>

      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 mt-6">4.3 Phase 3: Complementarity Identification</h3>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed"><strong>Objective:</strong> see where offerings are overlapping and where they are distinct.</p>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">CEA encourages actors to ask:</p>

      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300 ml-4">
        <li className="leading-relaxed">
          Are we truly serving the same users in the same way, or are there natural segments
          <ul className="list-disc list-inside mb-2 space-y-1 text-gray-700 dark:text-gray-300 ml-6 mt-2">
            <li className="leading-relaxed">For example, small masajid versus large national conferences, beginners versus advanced learners, local communities versus global audiences</li>
          </ul>
        </li>
        <li className="leading-relaxed">
          Are we serving different layers of the stack
          <ul className="list-disc list-inside mb-2 space-y-1 text-gray-700 dark:text-gray-300 ml-6 mt-2">
            <li className="leading-relaxed">End user applications, institutional dashboards, data services, infrastructure libraries, standard protocols</li>
          </ul>
        </li>
        <li className="leading-relaxed">
          Are there natural sequences in the user journey that link products together
          <ul className="list-disc list-inside mb-2 space-y-1 text-gray-700 dark:text-gray-300 ml-6 mt-2">
            <li className="leading-relaxed">An event platform that feeds into a learning platform, a zakat calculator that connects with a donation processor, or a youth curriculum that connects with career readiness tools</li>
          </ul>
        </li>
      </ul>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed"><strong>Deliverable:</strong> a map of where organizations are potential substitutes and where they are potential complements.</p>

      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 mt-6">4.4 Phase 4: Collaboration Opportunities</h3>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed"><strong>Objective:</strong> design concrete ways to work together.</p>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">Common collaboration patterns include:</p>

      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300 ml-4">
        <li className="leading-relaxed">
          <strong className="font-bold text-gray-900 dark:text-white">Shared open source components</strong>
          <ul className="list-disc list-inside mb-2 space-y-1 text-gray-700 dark:text-gray-300 ml-6 mt-2">
            <li className="leading-relaxed">Maintaining critical shared libraries jointly, such as prayer time engines, Quranic text renderers, or ticketing logic</li>
          </ul>
        </li>
        <li className="leading-relaxed">
          <strong className="font-bold text-gray-900 dark:text-white">Standards and interoperability</strong>
          <ul className="list-disc list-inside mb-2 space-y-1 text-gray-700 dark:text-gray-300 ml-6 mt-2">
            <li className="leading-relaxed">Agreeing on data formats, API contracts, or identity standards so that products can interoperate and users can move information between them easily</li>
          </ul>
        </li>
        <li className="leading-relaxed">
          <strong className="font-bold text-gray-900 dark:text-white">Division of labor</strong>
          <ul className="list-disc list-inside mb-2 space-y-1 text-gray-700 dark:text-gray-300 ml-6 mt-2">
            <li className="leading-relaxed">One team focusing on infrastructure or APIs, another on user facing applications, while sharing benefits and attribution</li>
          </ul>
        </li>
        <li className="leading-relaxed">
          <strong className="font-bold text-gray-900 dark:text-white">Market segmentation agreements</strong>
          <ul className="list-disc list-inside mb-2 space-y-1 text-gray-700 dark:text-gray-300 ml-6 mt-2">
            <li className="leading-relaxed">Informal understandings that different teams will focus on specific geographies, user segments, or organizational types, with mutual referrals instead of price wars</li>
          </ul>
        </li>
        <li className="leading-relaxed">
          <strong className="font-bold text-gray-900 dark:text-white">Joint pilots and deployments</strong>
          <ul className="list-disc list-inside mb-2 space-y-1 text-gray-700 dark:text-gray-300 ml-6 mt-2">
            <li className="leading-relaxed">Coordinating to offer combined solutions to institutions such as schools, masajid, NGOs, or universities</li>
          </ul>
        </li>
      </ul>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed"><strong>Deliverable:</strong> a short list of practical collaboration experiments that can be tried within a defined time frame, with clear roles.</p>

      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 mt-6">4.5 Phase 5: Cooperative Experiments and Learning</h3>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed"><strong>Objective:</strong> test and refine collaboration patterns.</p>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        Instead of attempting grand alliances immediately, CEA encourages small, low risk experiments such as:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300 ml-4">
        <li className="leading-relaxed">Co maintaining one open source repository</li>
        <li className="leading-relaxed">Running one joint pilot with a partner institution</li>
        <li className="leading-relaxed">Setting up one cross referral workflow between products</li>
        <li className="leading-relaxed">Publishing one shared specification</li>
      </ul>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        These experiments should include agreed success criteria, equal respect for each party's constraints, and a simple process for reviewing outcomes and adjusting the collaboration.
      </p>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed"><strong>Deliverable:</strong> documented learnings about what works, what does not, and what should be scaled or repeated.</p>

      <hr className="my-8 border-gray-300 dark:border-gray-700" />

      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 mt-8">5. Islamic Principles Underlying CEA</h2>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        CEA is not only a technical or strategic construct. It is grounded in Islamic ethics that give shape and direction to collaboration.
      </p>

      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 mt-6">5.1 Cooperation in good and piety</h3>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        The Qur'an instructs believers to cooperate in righteousness and mindfulness of Allah, and not to cooperate in sin and aggression. This principle supports:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300 ml-4">
        <li className="leading-relaxed">Collaboration that uplifts communities and removes hardship</li>
        <li className="leading-relaxed">Refusal to join practices that harm others, even if they appear profitable</li>
        <li className="leading-relaxed">A default posture of goodwill toward other sincere efforts</li>
      </ul>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        CEA operationalizes this by encouraging founders to look for ways to reinforce each other's beneficial work rather than treat one another primarily as threats.
      </p>

      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 mt-6">5.2 Avoiding harmful monopolies</h3>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        Islamic jurisprudence includes concern for practices that hoard essential goods, create artificial scarcity, or allow a single actor to harm others through concentrated power. While digital products are not always directly analogous to physical goods, the underlying concern is relevant.
      </p>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">CEA encourages patterns that:</p>

      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300 ml-4">
        <li className="leading-relaxed">Reduce the risk of a single company controlling critical religious or community infrastructure</li>
        <li className="leading-relaxed">Ensure multiple independent implementations exist where necessary</li>
        <li className="leading-relaxed">Spread essential knowledge and code across trusted stewards, especially through open source</li>
      </ul>

      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 mt-6">5.3 Reducing waste and redundancy</h3>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        Wastefulness and extravagance are discouraged in the Islamic tradition. In the digital context, this can include:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300 ml-4">
        <li className="leading-relaxed">Unnecessary duplication of basic infrastructure</li>
        <li className="leading-relaxed">Rebuilding the same minimal feature set several times in closed silos</li>
        <li className="leading-relaxed">Letting valuable code or knowledge die when a single project ends</li>
      </ul>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        CEA promotes shared components, documentation, and standards that allow more of the community's limited energy to go toward differentiation and depth instead of repetitive reinvention.
      </p>

      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 mt-6">5.4 Justice and transparency</h3>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        Islamic ethics place a strong emphasis on fairness, clear contracts, and honest dealing. Applied to digital ecosystems, this encourages:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300 ml-4">
        <li className="leading-relaxed">Transparent governance of shared components and standards</li>
        <li className="leading-relaxed">Clear agreements around attribution, revenue sharing, and responsibilities</li>
        <li className="leading-relaxed">Open acknowledgment of the contributions of others</li>
      </ul>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        CEA is most effective when collaboration is conducted with clear expectations and a sincere intention to avoid exploiting partners.
      </p>

      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 mt-6">5.5 Serving the ummah and seeking reward</h3>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        Many Muslim founders already frame their work as a form of service and ongoing charity. CEA offers a structure that aligns daily strategic decisions with this intention, so that:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300 ml-4">
        <li className="leading-relaxed">User benefit, community resilience, and ethical integrity are prioritized</li>
        <li className="leading-relaxed">Metrics such as active users and revenue are treated as means rather than ultimate ends</li>
        <li className="leading-relaxed">Founders see each other as fellow servants of the ummah, not simply as obstacles</li>
      </ul>

      <hr className="my-8 border-gray-300 dark:border-gray-700" />

      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 mt-8">6. Case Studies and Illustrative Examples</h2>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        The following simplified scenarios illustrate how CEA can reshape a domain. They are composite examples rather than descriptions of specific organizations.
      </p>

      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 mt-6">6.1 Multiple Muslim event platforms</h3>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">Scenario: three teams have built event management platforms for Muslim conferences and community events.</p>

      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300 ml-4">
        <li className="leading-relaxed">Team A has strong user interface design and mobile apps</li>
        <li className="leading-relaxed">Team B has deep relationships with large conference organizers and masajid</li>
        <li className="leading-relaxed">Team C is a small, highly technical team focused on open source infrastructure</li>
      </ul>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed"><strong>Without CEA:</strong></p>

      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300 ml-4">
        <li className="leading-relaxed">Each team rebuilds similar ticketing logic, calendar views, and QR check in flows</li>
        <li className="leading-relaxed">Large organizers receive competing pitches and feel pressure to choose one provider</li>
        <li className="leading-relaxed">Smaller events are ignored, as none of the teams can serve them profitably</li>
        <li className="leading-relaxed">None of the platforms integrate with community learning platforms or donation systems</li>
      </ul>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed"><strong>With CEA:</strong></p>

      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300 ml-4">
        <li className="leading-relaxed">Team C maintains an open source event core, with shared ticketing logic, QR check in, and basic analytics</li>
        <li className="leading-relaxed">Teams A and B build on that core, focusing their energy on specific segments and user experiences</li>
        <li className="leading-relaxed">The three teams agree on a shared event data format and API, so that events can be surfaced in other Muslim apps and websites</li>
        <li className="leading-relaxed">They coordinate pilots where one platform covers registration and another covers post event engagement and content</li>
      </ul>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">The ecosystem gains a more robust core, while each team plays to its strengths.</p>

      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 mt-6">6.2 Qur'an learning and literacy tools</h3>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">Scenario: several teams are building Qur'an and basic Arabic reading apps.</p>

      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300 ml-4">
        <li className="leading-relaxed">One team focuses on tajwid rules and recitation</li>
        <li className="leading-relaxed">Another emphasizes gamified letter recognition for children</li>
        <li className="leading-relaxed">A third concentrates on curriculum design for adult reverts</li>
      </ul>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed"><strong>Without CEA:</strong></p>

      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300 ml-4">
        <li className="leading-relaxed">Each team sources and manages its own copies of Qur'anic text, fonts, and audio recitations</li>
        <li className="leading-relaxed">Slight differences in formatting and encoding make interoperability difficult</li>
        <li className="leading-relaxed">Institutions must choose one platform and cannot easily combine strengths</li>
      </ul>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed"><strong>With CEA:</strong></p>

      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300 ml-4">
        <li className="leading-relaxed">The teams, facilitated by a neutral actor, agree on and help maintain a shared open source text and audio library, along with rendering components</li>
        <li className="leading-relaxed">Each product consumes this shared library but differentiates itself at the pedagogical layer</li>
        <li className="leading-relaxed">Data about learner progress is stored in a portable, privacy aware format that allows a learner to carry their achievements between compatible tools</li>
      </ul>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">Again, the ummah benefits from both variety and consistency.</p>

      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 mt-6">6.3 Halal personal finance and zakat tools</h3>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">Scenario: multiple apps offer halal budgeting, zakat calculators, and donation flows.</p>

      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300 ml-4">
        <li className="leading-relaxed">One team focuses on user friendly interfaces for young professionals</li>
        <li className="leading-relaxed">Another integrates heavily with local masajid and NGOs</li>
        <li className="leading-relaxed">A third team specializes in compliance and scholarly review</li>
      </ul>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed"><strong>Without CEA:</strong></p>

      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300 ml-4">
        <li className="leading-relaxed">Each team develops its own zakat formula implementations and eligibility logic</li>
        <li className="leading-relaxed">Scholars are approached separately by multiple teams, leading to duplicated effort</li>
        <li className="leading-relaxed">Users receive inconsistent guidance and calculations</li>
      </ul>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed"><strong>With CEA:</strong></p>

      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300 ml-4">
        <li className="leading-relaxed">The teams collaborate with qualified scholars to develop a shared, versioned open source zakat calculation library and guidance set, with clear documentation of different scholarly views and parameters</li>
        <li className="leading-relaxed">Each app still chooses how to present and default these options, but they are at least grounded in a common, reviewed engine</li>
        <li className="leading-relaxed">A shared schema for zakat and donation receipts allows consistent record keeping and potential future integration with tax or community reporting tools</li>
      </ul>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">The shared core builds confidence, while individual products differentiate on design, support, and additional services.</p>

      <hr className="my-8 border-gray-300 dark:border-gray-700" />

      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 mt-8">7. Why MOSF Is Positioned to Lead This Movement</h2>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        The <strong>Muslim Open Source Foundation (MOSF)</strong> is well suited to serve as a steward and promoter of CEA in several ways.
      </p>

      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 mt-6">7.1 Neutral, nonprofit orientation</h3>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        MOSF is not a for profit startup trying to capture a specific market category. Its mission is to unlock and support ethical, open, and impactful Muslim digital initiatives. This neutral stance allows MOSF to:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300 ml-4">
        <li className="leading-relaxed">Convene founders who might see each other as competitors</li>
        <li className="leading-relaxed">Advocate for user and community interests over any single product's dominance</li>
        <li className="leading-relaxed">Hold shared assets in trust for the broader ecosystem</li>
      </ul>

      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 mt-6">7.2 Open source expertise</h3>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        MOSF is structured around open source values and practices. This enables it to:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300 ml-4">
        <li className="leading-relaxed">Host and maintain shared libraries, tools, and reference implementations</li>
        <li className="leading-relaxed">Build contribution pathways for multiple organizations and volunteers</li>
        <li className="leading-relaxed">Provide governance structures that balance stability and openness</li>
      </ul>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">Open source infrastructure is a natural foundation for CEA in many domains.</p>

      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 mt-6">7.3 Backbone function for collective efforts</h3>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        In fields such as collective impact, a backbone organization coordinates data, convenings, and shared measurement. MOSF can play a similar role by:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300 ml-4">
        <li className="leading-relaxed">Organizing ecosystem mapping exercises in priority domains</li>
        <li className="leading-relaxed">Facilitating workshops where founders walk through the CEA framework together</li>
        <li className="leading-relaxed">Maintaining public documentation and standards that emerge from these efforts</li>
        <li className="leading-relaxed">Helping capture and disseminate lessons learned from collaboration experiments</li>
      </ul>

      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 mt-6">7.4 Ethical anchoring</h3>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        As a faith aligned organization, MOSF can anchor CEA in Islamic ethics. This includes:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300 ml-4">
        <li className="leading-relaxed">Encouraging sincere intentions and reminding collaborators of their higher purpose</li>
        <li className="leading-relaxed">Incorporating relevant scholarly input where appropriate</li>
        <li className="leading-relaxed">Maintaining a consistent emphasis on justice, transparency, and user welfare</li>
      </ul>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        This ethical anchor helps ensure that collaboration does not become an excuse for anti competitive collusion or exclusion, but remains focused on public benefit.
      </p>

      <hr className="my-8 border-gray-300 dark:border-gray-700" />

      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 mt-8">8. Call to Action</h2>

      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 mt-6">8.1 For Muslim founders and product teams</h3>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        If you are building a Muslim focused digital product or service, CEA offers a way to:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300 ml-4">
        <li className="leading-relaxed">Reduce your maintenance burden</li>
        <li className="leading-relaxed">Increase your impact</li>
        <li className="leading-relaxed">Build more resilient offerings</li>
        <li className="leading-relaxed">Align your strategy with your values</li>
      </ul>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">Practical next steps:</p>

      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300 ml-4">
        <li className="leading-relaxed">Conduct your own internal ecosystem map for your domain</li>
        <li className="leading-relaxed">Reach out to at least one other founder or team for a conversation framed around collaboration rather than competition</li>
        <li className="leading-relaxed">Identify one small experiment you could run together, such as sharing an internal component, agreeing on a simple data format, or referring leads that clearly fit the other's niche better</li>
        <li className="leading-relaxed">Engage with MOSF to participate in broader CEA initiatives and shared infrastructure projects</li>
      </ul>

      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 mt-6">8.2 For institutions and community organizations</h3>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        If you run a masjid, school, NGO, or similar institution, you can:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300 ml-4">
        <li className="leading-relaxed">Ask vendors about their interoperability and collaboration posture</li>
        <li className="leading-relaxed">Favor tools that participate in open standards and shared infrastructure</li>
        <li className="leading-relaxed">Encourage your technology partners to connect with each other and with MOSF</li>
        <li className="leading-relaxed">Support pilots that combine the strengths of multiple Muslim products rather than insisting on a single vendor solution</li>
      </ul>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        Your procurement choices can encourage the emergence of collaborative ecosystems rather than fragmented landscapes.
      </p>

      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 mt-6">8.3 For donors and supporters</h3>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        If you support Muslim digital work financially or with your expertise, you can:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300 ml-4">
        <li className="leading-relaxed">Allocate some of your support to ecosystem building, not only individual products</li>
        <li className="leading-relaxed">Fund development and maintenance of shared open source components and standards</li>
        <li className="leading-relaxed">Support MOSF's work as a backbone organization for CEA efforts</li>
        <li className="leading-relaxed">Encourage the projects you fund to participate in collaborative initiatives</li>
      </ul>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        Investing in shared infrastructure can multiply the impact of every dollar directed at individual projects.
      </p>

      <hr className="my-8 border-gray-300 dark:border-gray-700" />

      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 mt-8">9. Appendix: Toward a CEA Toolkit</h2>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        This white paper introduces the concept and overarching framework of Collaborative Ecosystem Analysis. MOSF intends to develop and publish practical tools to help communities apply CEA, including:
      </p>

      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 mt-6">9.1 CEA Ecosystem Mapping Canvas</h3>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">A printable or digital template that guides teams through:</p>

      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300 ml-4">
        <li className="leading-relaxed">Listing actors and offerings</li>
        <li className="leading-relaxed">Segmenting users and institutions</li>
        <li className="leading-relaxed">Identifying shared infrastructure and adjacent stakeholders</li>
      </ul>

      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 mt-6">9.2 Strength and Complementarity Profile Template</h3>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">A simple worksheet for teams to describe:</p>

      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300 ml-4">
        <li className="leading-relaxed">Their core strengths and constraints</li>
        <li className="leading-relaxed">Desired areas of focus</li>
        <li className="leading-relaxed">Possible complementors and partners</li>
      </ul>

      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 mt-6">9.3 Collaboration Pattern Library</h3>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">A living catalog of collaboration patterns observed in practice, such as:</p>

      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300 ml-4">
        <li className="leading-relaxed">Shared libraries and components</li>
        <li className="leading-relaxed">Joint pilots</li>
        <li className="leading-relaxed">Cross referrals</li>
        <li className="leading-relaxed">Standards bodies and working groups</li>
        <li className="leading-relaxed">Shared documentation hubs</li>
      </ul>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">Each pattern can include benefits, risks, and implementation advice.</p>

      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 mt-6">9.4 Governance and Agreement Examples</h3>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">Model documents and guidance for:</p>

      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300 ml-4">
        <li className="leading-relaxed">Memoranda of understanding between collaborating projects</li>
        <li className="leading-relaxed">Open source governance models for shared repositories</li>
        <li className="leading-relaxed">Code of conduct and ethical guidelines for joint work</li>
      </ul>

      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 mt-6">9.5 Islamic Foundations Brief</h3>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">A short companion document that:</p>

      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300 ml-4">
        <li className="leading-relaxed">Summarizes key Islamic principles related to cooperation, justice, and market ethics</li>
        <li className="leading-relaxed">Provides references for further study</li>
        <li className="leading-relaxed">Suggests ways to incorporate spiritual reminders into collaborative work</li>
      </ul>

      <hr className="my-8 border-gray-300 dark:border-gray-700" />

      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Conclusion</h2>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        Collaborative Ecosystem Analysis is an invitation. It invites Muslim founders, institutions, and supporters to see each other not only as isolated actors, but as parts of a living, interconnected system. It offers a way to honor sincere efforts, reduce waste, and build durable digital infrastructure for the ummah.
      </p>

      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        Through CEA, MOSF seeks to help reimagine Muslim digital innovation. Not as a tournament with a single winner, but as an ecosystem where many sincere contributors can thrive together, and where users receive tools that are more cohesive, more robust, and more aligned with the values they hold dear.
      </p>
    </>
  );
}
