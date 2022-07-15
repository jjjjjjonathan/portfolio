import { useState } from "react";
import { Combobox } from "@headlessui/react";

const MyCombobox = ({ projects, skills }) => {
  const [selectedSkill, setSelectedSkill] = useState(skills[0]);
  const [query, setQuery] = useState('');
  const filteredSkills =
    query === ''
      ? skills
      : skills.filter((skill) => (
        skill.name.toLowerCase().includes(query.toLowerCase())
      ));
  return (
    <Combobox value={selectedSkill} onChange={setSelectedSkill}>
      <Combobox.Input onChange={(event) => setQuery(event.target.value)} displayValue={(skill) => skill.name} />
      <Combobox.Options>
        {filteredSkills.map((skill) => (
          <Combobox.Option key={skill.id} value={skill.id}>
            {skill.name}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  );
};

export default MyCombobox;