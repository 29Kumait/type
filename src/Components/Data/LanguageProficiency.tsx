import React, { useState } from "react";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },
  slider: {
    width: "25px",
    height: "100px",
    background: "#ddd",
    outline: "none",
    opacity: "0.7",
  },
  sliderThumb: {
    width: "25px",
    height: "25px",
    background: "#4CAF50",
    cursor: "pointer",
  },
  addLanguageButton: {
    padding: "8px 16px",
    fontSize: "16px",
    cursor: "pointer",
  },
});

interface Language {
  id: number;
  name: string;
  level: number;
}

const LanguageProficiency: React.FC = () => {
  const [languages, setLanguages] = useState<Language[]>([]);

  const handleAddLanguage = () => {
    const newLanguage = { id: Date.now(), name: "", level: 1 };
    setLanguages([...languages, newLanguage]);
  };

  const handleLevelChange = (id: number, newLevel: number) => {
    const updatedLanguages = languages.map((lang) =>
      lang.id === id ? { ...lang, level: newLevel } : lang,
    );
    setLanguages(updatedLanguages);
  };

  return (
    <div {...stylex.props(styles.container)}>
      {languages.map((language, index) => (
        <div key={language.id}>
          <input
            type="text"
            placeholder={`Language ${index + 1}`}
            onChange={(e) => {
              const updatedLanguages = languages.map((lang) =>
                lang.id === language.id
                  ? { ...lang, name: e.target.value }
                  : lang,
              );
              setLanguages(updatedLanguages);
            }}
            value={language.name}
          />
          <input
            type="range"
            min="1"
            max="5"
            value={language.level}
            {...stylex.props(styles.slider)}
            onChange={(e) =>
              handleLevelChange(language.id, parseInt(e.target.value, 10))
            }
            style={
              {
                "--thumb-background":
                  language.level > 3 ? "#4CAF50" : "#f44336",
              } as React.CSSProperties
            }
          />
          Level: {language.level}
        </div>
      ))}
      <button
        {...stylex.props(styles.addLanguageButton)}
        onClick={handleAddLanguage}
      >
        Add Language
      </button>
    </div>
  );
};

export default LanguageProficiency;
