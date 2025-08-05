import PrimaryButton from './PrimaryButton';

export default function ButtonCollection() {
  return (
    <div
      class="bg-[#111111] relative p-6 flex flex-col gap-4 rounded-md"
    >
      <h2 class="text-white font-bold text-lg mb-2">Primary Buttons</h2>
      <div class="flex flex-wrap gap-4 items-center">
        <PrimaryButton>Primary</PrimaryButton>
        <PrimaryButton state="hover">Hover</PrimaryButton>
        <PrimaryButton state="focus">Focus</PrimaryButton>
        <PrimaryButton state="disabled">Disabled</PrimaryButton>
      </div>
    </div>
  );
}
