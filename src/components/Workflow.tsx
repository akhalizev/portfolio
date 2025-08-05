import { createSignal } from 'solid-js';

const workflowData = [
  {
    title: 'Project Design',
    details: [
      'Requirements Gathering: Analyze initial project requirements; collaborate with stakeholders to clarify goals.',
      'Brainstorming: Conduct ideation sessions; sketch initial concepts.',
      'Figma Iterations: Create and refine designs in Figma; incorporate feedback loops.',
      'Prototyping: Develop interactive prototypes for user testing or stakeholder reviews when needed.',
    ],
  },
  {
    title: 'Component Library Maintenance',
    details: [
      'Guideline Development: Establish and update design system guidelines.',
      'Component Creation: Design reusable components (e.g., buttons, modals) in Figma.',
      'Version Control: Document and update components for team use.',
    ],
  },
  {
    title: 'Dark Mode Implementation',
    details: [
      'Color Variable Creation: Define and maintain color variables for light and dark modes.',
      'Mode Switching: Enable instant toggling between modes using Figma variables.',
      'Testing: Validate color contrast and accessibility (e.g., WCAG compliance).',
    ],
  },
  {
    title: 'Project Management Collaboration',
    details: [
      'Story Review: Evaluate user stories for accuracy and alignment with designs.',
      'Stakeholder Communication: Present designs; clarify',
    ],
  },
];

const Workflow = () => {
  const [activeIndex, setActiveIndex] = createSignal(null);

  const handleClick = (index: any) => {
    setActiveIndex(index === activeIndex() ? null : index);
  };

  return (
    <div class="workflow-container">
      <div class="workflow-line"></div>
      {workflowData.map((item, index) => (
        <div class="workflow-item">
          <div class="workflow-station" onClick={() => handleClick(index)}></div>
          <div class={`workflow-content ${index === activeIndex() ? 'active' : ''}`}>
            <h2 class="text-2xl font-bold text-accent-1 mb-4">{item.title}</h2>
            <ul class="list-disc pl-6">
              {item.details.map((detail) => (
                <li class="mb-2">{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Workflow;
