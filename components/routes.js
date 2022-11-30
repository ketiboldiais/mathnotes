const math = "/math";
const na = "/numerical-analysis/";
const ra = "/real_analysis/";
const cpa = "/complex-analysis/";
const aba = "/abstract-algebra/";
const geo = "/geometry/";
const dp = "/design-patterns/";
const proba = "/probability/";
const lin = "/linear_algebra/";
const com = "/combinatorics/";
const dm = "/discrete_mathematics/";
const num = "/number_theory/";
const sets = "/set_theory/";
const log = "/logic/";
const cs = "/cs";
// const fs = "/foundations/";
const fp = "/functional_programming/";
const dsa = "/data_structures_and_algorithms/";
const cry = "/cryptography/";
// const asy = "/asynchronous_programming/";
// const swf = "swift/";
const sys = "/systems/";
// const tls = "/tools/";
// const shells = "shells/";
// const git = "git/";
const lang = "/languages/";
// const mob = "/mobile_systems/";
const clang = "c/";

const Routes = [
  { name: "Front Matter", path: "/" },
  { name: "Scratch", path: "/scratch" },
  {
    name: "Review of Mathematics",
    path: `${math}/preface`,
    children: [
      // { name: "Reference", path: `${math}/reference` },
      { name: "Arithmetic", path: `${math}/arithmetic/main` },
      {
        name: "Set Theory",
        path: `${math}${sets}axioms`,
        children: [
          { name: "Naive Set Theory", path: `${math}${sets}axioms` },
          { name: "Tuples", path: `${math}${sets}tuples` },
          { name: "Relations", path: `${math}${sets}relations` },
          { name: "Numbers", path: `${math}${sets}natural-numbers` },
          { name: "Functions", path: `${math}${sets}functions` },
          { name: "Sequences", path: `${math}${sets}sequences` },
          { name: "Bags", path: `${math}${sets}bags` },
          { name: "Categories", path: `${math}${sets}categories` },
          { name: "Classes", path: `${math}${sets}class` },
        ],
      },
      {
        name: "Combinatorics",
        path: `${math}${com}preface`,
        children: [
          { name: "Counting", path: `${math}${com}counting` },
          { name: "Catalan Numbers", path: `${math}${com}catalan-numbers` },
          { name: "Generating Functions", path: `${math}${com}generating-functions` },
          { name: "Graph Theory", path: `${math}${com}basic-graph-theory` },
        ],
      },
      {
        name: "Mathematical Logic",
        path: `${math}${log}preface`,
        children: [
          { name: "Informal Logic", path: `${math}${log}language` },
          { name: "Proof Techniques", path: `${math}${log}proof-techniques` },
          { name: "Symbolic Logic", path: `${math}${log}propositional-logic` },
          { name: "Computation", path: `${math}${log}complexity` },
          // { name: "Arguments", path: `${math}${log}arguments` },
        ],
      },
      {
        name: "Abstract Algebra",
        path: `${math}${aba}preface`,
        children: [
          {
            name: "Basic Notions",
            path: `${math}${aba}intro-to-abstract-algebra`,
            children: [
              { name: "Operations", path: `${math}${aba}intro-to-abstract-algebra#operations` },
              {
                name: "Algebraic Structures",
                path: `${math}${aba}intro-to-abstract-algebra#algebraic-structure`,
              },
              {
                name: "Commutativity",
                path: `${math}${aba}intro-to-abstract-algebra#commutativity`,
              },
              {
                name: "Associativity",
                path: `${math}${aba}intro-to-abstract-algebra#associativity`,
              },
              { name: "Identity Element", path: `${math}${aba}intro-to-abstract-algebra#identity` },
              {
                name: "Distributivity",
                path: `${math}${aba}intro-to-abstract-algebra#distributivity`,
              },
              { name: "Semigroups", path: `${math}${aba}intro-to-abstract-algebra#semigroup` },
              {
                name: "Commutative Semigroup",
                path: `${math}${aba}intro-to-abstract-algebra#commutative-semigroup`,
              },
              { name: "Monoid", path: `${math}${aba}intro-to-abstract-algebra#monoid` },
              {
                name: "Commutative Monoid",
                path: `${math}${aba}intro-to-abstract-algebra#commutative-monoids`,
              },
              { name: "Groups", path: `${math}${aba}intro-to-abstract-algebra#groups` },
              {
                name: "Abelian Groups",
                path: `${math}${aba}intro-to-abstract-algebra#abelian-group`,
              },
              { name: "Rings", path: `${math}${aba}intro-to-abstract-algebra#rings` },
              { name: "Isomorphism", path: `${math}${aba}intro-to-abstract-algebra#isomorphisms` },
            ],
          },
        ],
      },
      {
        name: "Geometry",
        path: `${math}${geo}foundations`,
        children: [{ name: "Trigonometry", path: `${math}${geo}trigonometry` }],
      },
      {
        name: "Linear Algebra",
        path: `${math}${lin}gaussian-elimination`,
        children: [
          { name: "Vectors", path: `${math}${lin}axioms` },
          // { name: "Gaussian Elimination", path: `${math}${lin}gaussian-elimination` },
          // { name: "Vector Algebra", path: `${math}${lin}vectors` },
        ],
      },
      {
        name: "Probability Theory",
        path: `${math}${proba}intro`,
        children: [
          { name: "Classical Probability", path: `${math}${proba}axioms` },
          // { name: "Conditional Probability", path: `${math}${proba}conditioning` },
        ],
      },
      {
        name: "Number Theory",
        path: `${math}${num}preface`,
        children: [
          { name: "Divisibility", path: `${math}${num}divisibility` },
          { name: "Modular Arithmetic", path: `${math}${num}remainders` },
          { name: "Radices", path: `${math}${num}radices` },
          { name: "Prime Factorization", path: `${math}${num}prime-factorization` },
        ],
      },
      { name: "Numerical Analysis", path: `${math}${na}fundamentals` },
      // {name: "Real Analysis", path: `${math}${ra}preface`, children: [
      // ]},
      {
        name: "Discrete Mathematics",
        path: `${math}${dm}preface`,
        children: [
          { name: "Induction", path: `${math}${dm}induction` },
          { name: "Invariants", path: `${math}${dm}invariants` },
          { name: "Strong Induction", path: `${math}${dm}strong_induction` },
          // { name: "Number Theory", path: `${math}${dm}number_theory`},
          // { name: "Set Theory", path: `${math}${dm}set_theory` },
          // { name: "Relations", path: `${math}${dm}relations` },
          // { name: "Functions", path: `${math}${dm}functions` },
          // { name: "Graph Theory", path: `${math}${dm}graph_theory` },
          // { name: "Combinatorics", path: `${math}${dm}combinatorics` },
        ],
      },
      {
        name: "Real Analysis",
        path: `${math}${ra}preface`,
        children: [
          { name: "Constructing the Reals", path: `${math}${ra}constructing-the-reals` },
          { name: "Real-valued Functions", path: `${math}${ra}real-valued-functions` },
          { name: "Polynomial Functions", path: `${math}${ra}polynomial-functions` },
          {
            name: "Exponential & Logarithmic Functions",
            path: `${math}${ra}exponential-and-logarithmic-functions`,
          },
          { name: "Periodic Functions", path: `${math}${ra}periodic-functions` },
          { name: "Limits", path: `${math}${ra}limits` },
          { name: "Continuity", path: `${math}${ra}continuity` },
          { name: "Differentiability", path: `${math}${ra}differentiability` },
          { name: "Derivative Theorems", path: `${math}${ra}derivative-theorems` },
          { name: "Limits and Derivatives", path: `${math}${ra}limits-and-derivatives` },
          // { name: "Antiderivatives", path: `${math}${ra}antiderivatives` },
          { name: "Linear Approximations", path: `${math}${ra}linear_approximations` },
          { name: "Quadratic Approximations", path: `${math}${ra}quadratic_approximations` },
          { name: "Curve Sketching", path: `${math}${ra}curve_sketching` },
          { name: "Maxima & Minima", path: `${math}${ra}maxima_and_minima` },
          { name: "Related Rates", path: `${math}${ra}related_rates` },
          { name: "Newton's Method", path: `${math}${ra}newtons_method` },
          { name: "The Mean Value Theorem", path: `${math}${ra}mean_value_theorem` },
          { name: "Integration", path: `${math}${ra}integration` },
          // { name: "Introduction to Integration", path: `${math}${ra}introduction_to_integration` },
          // { name: "Definite Integrals", path: `${math}${ra}definite_integrals` },
          // { name: "𝑢-Substitution", path: `${math}${ra}u_substitution` },
          // { name: "Riemann Sums", path: `${math}${ra}riemann_sums` },
          { name: "The Fundamental Theorem of Calculus", path: `${math}${ra}ftc` },
          { name: "Common Applications of Integrals", path: `${math}${ra}integral_applications` },
          { name: "Areas Between Curves", path: `${math}${ra}areas_between_curves` },
          { name: "Techniques of Integration", path: `${math}${ra}integration_techniques` },
          { name: "Infinite Sequences", path: `${math}${ra}infinite-sequences` },
          { name: "Fourier Transforms", path: `${math}${ra}fourier-transforms` },
          { name: "Differential Equations", path: `${math}${ra}differential-equations` },
        ],
      },
      { name: "Complex Analysis", path: `${math}${cpa}introduction` },
      // { name: "Applied Mathematics", path: `${math}${phys}mechanics`, children: [
      // 	{ name: "Mechanics", path: `${math}${phys}mechanics` },
      // ]},
      // { name: "Statistics", path: `${math}${stat}preface`, children: [
      // { name: "Foundational Definitions", path: `${math}${stat}foundational_definitions` },
      // ]},
    ],
  },
  {
    name: "Review of Computer Science",
    path: `${cs}/preface`,
    children: [
      // { name: "Fundamentals", path: `${cs}${fs}preface`, children: [
      // { name: "Variables & Types", path: `${cs}${fs}variables_and_types` },
      // { name: "Conditionals", path: `${cs}${fs}conditionals` },
      // { name: "Variable Scope", path: `${cs}${fs}variable_scope` },
      // { name: "Arrays", path: `${cs}${fs}arrays` },
      // { name: "Loops", path: `${cs}${fs}loops` },
      // ]},
      {
        name: "Computer Systems",
        path: `${cs}${sys}intro`,
        children: [
          { name: "Logic Gates", path: `${cs}${sys}logic-gates` },
          // { name: "Language Overview: C", path: `${cs}${sys}${clang}c_basics` },
          // { name: "Digital Signals", path: `${cs}${sys}digital_signals` },
          // { name: "Boolean Logic", path: `${cs}${sys}boolean_logic` },
          // { name: "Binary Representation", path: `${cs}${sys}binary_representation` },
          // { name: "Floating Point Numbers", path: `${cs}${sys}floats` },
          { name: "ALU", path: `${cs}${sys}alu` },
          { name: "Machine Time", path: `${cs}${sys}time` },
          { name: "Memory", path: `${cs}${sys}memory` },
          { name: "RAM", path: `${cs}${sys}ram` },
          { name: "Pointers", path: `${cs}${sys}pointers` },
          { name: "Program Counter", path: `${cs}${sys}pc` },
          { name: "Machine Language", path: `${cs}${sys}machine_language` },
          { name: "Memory Hierarchy", path: `${cs}${sys}memory_hierarchy` },
          { name: "Memory in x86-64", path: `${cs}${sys}x86_memory` },
          { name: "The CPU", path: `${cs}${sys}cpu` },
          {
            name: "Assemblers",
            path: `${cs}${sys}assemblers`,
            children: [{ name: "x86 Assembly", path: `${cs}${sys}x86_assembly` }],
          },
          {
            name: "Virtual Machines",
            path: `${cs}${sys}virtual_machines`,
            children: [
              { name: "Implementing a Virtual Machine", path: `${cs}${sys}vm_implementation` },
            ],
          },
          { name: "Compilers", path: `${cs}${sys}compilers` },
          { name: "Code Optimization", path: `${cs}${sys}code_optimization` },
          { name: "Linkers", path: `${cs}${sys}linkers` },
          { name: "Interrupts", path: `${cs}${sys}interrupts` },
          { name: "Operating Systems", path: `${cs}${sys}operating-systems` },
          {
            name: "Computer Networks",
            path: `${cs}${sys}computer-networks`,
            children: [
              {
                name: "Application Layer",
                path: `${cs}${sys}osi-application-layer`,
              },
              { name: "Data Layer", path: `${cs}${sys}data_layer` },
            ],
          },
          {
            name: "Databases",
            path: `${cs}${sys}databases`,
            children: [
              { name: "Relational Databases", path: `${cs}${sys}relational-databases` },
              { name: "Nonrelational Databases", path: `${cs}${sys}nonrelational-databases` },
            ],
          },
          { name: "Docker", path: `${cs}${sys}docker` },
        ],
      },
      // {
        // name: "Functional Programming",
        // path: `${cs}${fp}simple_data_types`,
        // children: [
          // { name: "Simple Data Types", path: `${cs}${fp}simple_data_types` },
          // { name: "Compound Data Types", path: `${cs}${fp}compound_data_types` },
        // ],
      // },
      // { name: "Asynchronous Programming with JavaScript", path: `${cs}${asy}preface`, children: [
      // { name: "Fundamentals", path: `${cs}${asy}fundamentals` },
      // { name: "Control Flow", path: `${cs}${asy}control_flow` },
      // { name: "Arrays", path: `${cs}${asy}arrays` },
      // { name: "Object Literals", path: `${cs}${asy}object_literals` },
      // { name: "Keyword 'this'", path: `${cs}${asy}keyword_this` },
      // { name: "Functional Programming Techniques", path: `${cs}${asy}functional_programming` },
      // { name: "TypeScript", path: `${cs}${asy}typescript` },
      // ]},
      { name: "Cryptography & Security", path: `${cs}${cry}intro`, children: [
        { name: "Web Security", path: `${cs}${cry}web-security` },
      ]},
      {
        name: "Languages/Frameworks",
        path: `${cs}${lang}preface`,
        children: [
          { name: "JavaScript", path: `${cs}${lang}javascript` },
          { name: "React", path: `${cs}${lang}react` },
        ],
      },
      {
        name: "Data Structures & Algorithms",
        path: `${cs}${dsa}intro`,
        children: [
          { name: "Prelude: Data Structures & Algorithms", path: `${cs}${dsa}dsa_overview` },
          { name: "Asymptotic Analysis", path: `${cs}${dsa}dsa_complexity_analysis` },
          { name: "Recursion", path: `${cs}${dsa}recursion` },
          { name: "Arrays", path: `${cs}${dsa}array` },
          { name: "Stacks", path: `${cs}${dsa}stack-adt` },
          { name: "Queues", path: `${cs}${dsa}queue-adt` },
          { name: "Lists", path: `${cs}${dsa}lists` },
          { name: "Binary Trees", path: `${cs}${dsa}binary-trees` },
          { name: "AVL Trees", path: `${cs}${dsa}avl-trees` },
          { name: "Fiber Trees", path: `${cs}${dsa}fiber-tree` },
          {
            name: "Graphs",
            path: `${cs}${dsa}graph-algorithms`,
            children: [
              { name: "Cycle Detection", path: `${cs}${dsa}cycle-detection` },
              { name: "Reachability", path: `${cs}${dsa}reachability` },
              { name: "Clusters", path: `${cs}${dsa}cycle-detection` },
              { name: "Topological Sorting", path: `${cs}${dsa}topological-sort` },
              { name: "Dynamic Programming", path: `${cs}${dsa}dynamic-programming` },
            ],
          },
          { name: "Matrices", path: `${cs}${dsa}matrix-algorithms` },
          { name: "Scheduling Algorithms", path: `${cs}${dsa}scheduling-algorithms` },
          { name: "Numeric Algorithms", path: `${cs}${dsa}dsa_numeric_algorithms` },
          { name: "Hash Tables", path: `${cs}${dsa}hash_tables` },
          { name: "Heaps", path: `${cs}${dsa}heaps` },
          { name: "Sorting Algorithms", path: `${cs}${dsa}sorting-algorithms` },
          { name: "Recursion", path: `${cs}${dsa}recursion` },
          { name: "Caches", path: `${cs}${dsa}caches` },
          { name: "Backtracking", path: `${cs}${dsa}backtracking` },
          // { name: "Static Arrays", path: `${cs}${dsa}arrays`,
          // 	children: [
          // 		{ name: "Linear Search", path: `${cs}${dsa}arrays#linear-search`, },
          // 		{ name: "Binary Search", path: `${cs}${dsa}arrays#binary-search`, },
          // 		{ name: "Max Finder", path: `${cs}${dsa}arrays#max-finder` },
          // 		{ name: "Min Finder", path: `${cs}${dsa}arrays#min-finder` },
          // 		{ name: "Summation", path: `${cs}${dsa}arrays#summate` },
          // 		{ name: "Arithmetic Mean", path: `${cs}${dsa}arrays#arithmetic-mean`, },
          // 		{ name: "Reversal", path: `${cs}${dsa}arrays#reversal` },
          // 		{ name: "Shifting Elements", path: `${cs}${dsa}arrays#shift` },
          // 		{ name: "Rotating Elements", path: `${cs}${dsa}arrays#rotate`, },
          // 		{ name: "Sorted Insertion", path: `${cs}${dsa}arrays#sorted-insert`, },
          // 		{ name: "Is this Array Sorted?", path: `${cs}${dsa}arrays#sort-check`, },
          // 		{ name: "Cost-benefit Analysis: Arrays", path: `${cs}${dsa}arrays#cost-benefit-analysis-arrays`, },
          // 	],
          // },
          // { name: "Dynamic Arrays", path: `${cs}${dsa}dynamic_arrays` },
          // { name: "Strings", path: `${cs}${dsa}strings` },
          // { name: "Time Algorithms", path: `${cs}${dsa}time`, },
          // { name: "Matrices", path: `${cs}${dsa}matrices` },
          // { name: "Linked Lists", path: `${cs}${dsa}linked_lists` },
          // { name: "Disjoint Sets", path: `${cs}${dsa}disjoint_sets` },
          // { name: "Circular Linked Lists", path: `${cs}${dsa}circular_linked_lists`, },
          // { name: "Doubly Linked Lists", path: `${cs}${dsa}doubly_linked_lists`, },
          // { name: "Stacks", path: `${cs}${dsa}stacks` },
          // { name: "Queues", path: `${cs}${dsa}queues` },
          // { name: "Trees", path: `${cs}${dsa}introduction-to-trees`, children: [
          // 		{ name: "Binary Trees", path: `${cs}${dsa}binary_trees`, },
          // 		{ name: "Tree Traversal", path: `${cs}${dsa}tree_traversal`,
          // 			children: [
          // 				{ name: "Preorder Traversal", path: `${cs}${dsa}preorder`, },
          // 				{ name: "Inorder Traversal", path: `${cs}${dsa}inorder`, },
          // 				{ name: "Postorder Traversal", path: `${cs}${dsa}postorder`, },
          // 				{ name: "Breadth-first Traversal", path: `${cs}${dsa}breadth_first`, },
          // 				{ name: "Comparing Traversal Methods", path: `${cs}${dsa}comparing_traversal_methods`, },
          // 				{ name: "Traversal Sketching", path: `${cs}${dsa}traversal_sketching`, },
          // 				{ name: "Traversal Complexities", path: `${cs}${dsa}traversal_complexities`, },
          // 				{ name: "Traversal Generation", path: `${cs}${dsa}traversal_generation`, },
          // 			],
          // 		},
          // 		{ name: "Order Determination", path: `${cs}${dsa}order_determination`, },
          // 		{ name: "Tree Summation", path: `${cs}${dsa}tree_sum`, },
          // 		{ name: "Binary Search Trees (BST)", path: `${cs}${dsa}binary_search_trees`,
          // 			children: [
          // 				{ name: "Searching BSTs", path: `${cs}${dsa}searching_binary_search_trees`, },
          // 				{ name: "Inserting New Nodes", path: `${cs}${dsa}bst_insertion`, },
          // 				{ name: "BST Constructor", path: `${cs}${dsa}bst_constructor`, },
          // 				{ name: "Deleting Nodes", path: `${cs}${dsa}bst_node_deletion`, },
          // 				{ name: "BST Traversal Generation", path: `${cs}${dsa}bst_traversal_generation`, },
          // 				{ name: "BST Costs", path: `${cs}${dsa}bst_costs`, },
          // 			],
          // 		},
          // 		{ name: "AVL Trees", path: `${cs}${dsa}avl_trees`, children: [
          // 			{ name: "Rotations", path: `${cs}${dsa}avl_trees#rotations`},
          // 			{ name: "Right-rotation", path: `${cs}${dsa}avl_trees#right-rotation`},
          // 			{ name: "Left-rotation", path: `${cs}${dsa}avl_trees#left-rotation`},
          // 			{ name: "Right-left-rotation", path: `${cs}${dsa}avl_trees#right-left-rotation`},
          // 			{ name: "Left-left-rotation", path: `${cs}${dsa}avl_trees#left-left-rotation`},
          // 			{ name: "General Form of AVL Rotations", path: `${cs}${dsa}avl_trees#general-form-of-avl-rotations`},

          // 		]},
          // 		{ name: "B-trees", path: `${cs}${dsa}btrees` },
          // 		{ name: "Red-black Trees", path: `${cs}${dsa}red_black_trees` },
          // 		{ name: "Fenwick Trees", path: `${cs}${dsa}fenwick_trees` },
          // 	],
          // },

          // { name: "Common Algorithms", path: `${cs}${dsa}commons` },
          // { name: "Potpourri", path: `${cs}${dsa}puzzles`, },
        ],
      },

      // { name: "Mobile Systems", path: `${cs}${mob}preface`, children: [
      // { name: "MVVM", path: `${cs}${mob}mvvm` },
      // { name: "Swift", path: `${cs}${mob}${swf}intro`, children: []},
      // ] },
      // { name: "Computer Languages", path: `${cs}${lang}preface`, children: [
      // { name: "Introduction to Parsing", path: `${cs}${lang}intro_to_parsing` },
      // ]},
      // { name: "Tools", path: `${cs}${tls}intro`, children: [
      // { name: "Bash", path: `${cs}${tls}${shells}basics` },
      // { name: "Git", path: `${cs}${tls}${git}basics` },
      // { name: "C++", path: `${cs}${tls}cpp_overview` },
      // { name: "Build Systems", path: `${cs}${tls}build_systems` },
      // { name: "Time Complexities", path: `${cs}${tls}time_complexities` },
      // { name: "Language: C++", path: `${cs}${dsa}language_overview_cpp`, children: [
      // { name: "Errors", path: `${cs}${dsa}errors` },
      // { name: "Operators", path: `${cs}${dsa}operators` },
      // { name: "Variables & Types", path: `${cs}${dsa}variables_and_types`, },
      // { name: "Header Files", path: `${cs}${dsa}header_files` },
      // { name: "Overflow", path: `${cs}${dsa}overflow` },
      // { name: "Value v. Reference Semantics", path: `${cs}${dsa}value_reference_semantics`, },
      // { name: "Strings", path: `${cs}${dsa}cpp-strings` },
      // { name: "Functions", path: `${cs}${dsa}functions`, children: [
      // { name: "Function Overloading", path: `${cs}${dsa}function_overloading`, },
      // { name: "Function Templates", path: `${cs}${dsa}function_templates`, },
      // { name: "Argument Passing", path: `${cs}${dsa}argument_passing`, },
      // { name: "Function Returns", path: `${cs}${dsa}function_returns`, },
      // { name: "Variable Scope", path: `${cs}${dsa}variable_scope`, },
      // { name: "Static Variables", path: `${cs}${dsa}static_variables`, },
      // { name: "Recursion Generally", path: `${cs}${dsa}cpp-recursion`, },
      // ],
      // },
      // { name: "Preprocessing", path: `${cs}${dsa}preprocessing`, },
      // { name: "Libraries", path: `${cs}${dsa}libraries` },
      // { name: "I/O Streams", path: `${cs}${dsa}io_streams` },
      // { name: "Namespaces", path: `${cs}${dsa}namespaces` },
      // { name: "Collections", path: `${cs}${dsa}collections` },
      // { name: "Pointers", path: `${cs}${dsa}pointers` },
      // { name: "Classes", path: `${cs}${dsa}classes` },
      // { name: "Friend Functions", path: `${cs}${dsa}friend_functions`, },
      // { name: "Metaprogramming: Templates", path: `${cs}${dsa}templates`, },
      // ],},
      // ]},
    ],
  },
];

export default Routes;
