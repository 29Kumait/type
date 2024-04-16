import React, { useState } from "react";
import * as stylex from "@stylexjs/stylex";
import { useInputs } from "./useInputs";
import { ActionType, InputField } from "./ actions.ts";
import Input from "./Input";

const DynamicInput = () => {
  const { state: inputs, dispatch } = useInputs();
  const [newGroupName, setNewGroupName] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch({ type: ActionType.Submit });
  };

  const groupedInputs = inputs.reduce(
    (acc: Record<string, InputField[]>, input: InputField) => {
      (acc[input.groupName] = acc[input.groupName] || []).push(input);
      return acc;
    },
    {},
  );

  return (
    <div>
      <div {...stylex.props(styles.controls)}>
        <input
          {...stylex.props(styles.input)}
          type="text"
          value={newGroupName}
          onChange={(e) => setNewGroupName(e.target.value)}
          placeholder="    ⓣ🅈ⓟⒺ"
        />
        <button
          {...stylex.props(styles.button)}
          onClick={() =>
            dispatch({ type: ActionType.AddInput, groupName: newGroupName })
          }
        >
          add
        </button>
        <button {...stylex.props(styles.button)} onClick={handleSubmit}>
          save
        </button>
      </div>
      <form onSubmit={handleSubmit} {...stylex.props(styles.form)}>
        {Object.entries(groupedInputs).map(([groupName, groupInputs]) => (
          <div key={groupName}>
            <h3>{groupName}</h3>
            {groupInputs.map((input) => (
              <div key={input.id} {...stylex.props(styles.inputContainer)}>
                <Input input={input} dispatch={dispatch} />
                {!input.editable && (
                  <button
                    {...stylex.props(styles.editButton)} // Apply the new style here
                    type="button"
                    onClick={() =>
                      dispatch({
                        type: ActionType.ToggleEditability,
                        id: input.id,
                      })
                    }
                  >
                    edit
                  </button>
                )}
              </div>
            ))}
          </div>
        ))}
      </form>
    </div>
  );
};

const styles = stylex.create({
  form: {
    maxWidth: 380,
    marginStart: "auto",
    marginEnd: "auto",
    marginBottom: 34,
  },

  input: {
    backgroundColor: "#4b51b7",
    borderStyle: "none",
    boxSizing: "border-box",
    color: "var(--primary-text)",
    fontSize: "14px",
    fontWeight: "normal",
    lineHeight: 1.25,
    paddingBottom: "8px",
    paddingEnd: "16px",
    paddingTop: "8px",
    width: "100%",
    alignSelf: "center",
    borderRadius: "4px",
    height: "36px",
    "::placeholder": {
      // This targets the placeholder text
      color: "rgba(255, 255, 255, 0.7)", // Lighter color for the placeholder
      fontSize: "14px", // Consistent with the input text size
      fontWeight: "bold",
    },
  },
  inputContainer: {
    marginBottom: "9px",
  },
  button: {
    color: "#4b51b7",
    alignItems: "center",
    borderColor: "#4a86c7",
    borderRadius: 8,
    fontSize: "14px",
    padding: "8px 12px",
    height: "40px",
    width: "80px",
    display: "inline-flex",
    justifyContent: "center",
    cursor: "pointer",
    margin: "0 5px",
  },
  editButton: {
    padding: "3px 7px",
    fontSize: "9px",
    height: "29px",
    width: "auto",
    color: "#4b51b7",
    alignItems: "center",
    borderColor: "#4a86c7",
    borderRadius: 9,
    display: "inline-flex",
    justifyContent: "center",
    cursor: "pointer",
    margin: "0 5px",
  },
  controls: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
});

export default DynamicInput;
//
// import React, { useReducer, useState } from "react";
// import * as stylex from "@stylexjs/stylex";
// import { v4 as uuidv4 } from "uuid";
//
// interface InputField {
//   id: string;
//   type: "text";
//   value: string;
//   editable: boolean;
//   groupName: string;
// }
//
// type State = InputField[];
// type Action =
//   | { type: "ADD_INPUT"; groupName: string }
//   | { type: "UPDATE_INPUT"; id: string; value: string }
//   | { type: "TOGGLE_EDITABILITY"; id: string }
//   | { type: "SUBMIT" };
//
// const inputReducer = (state: State, action: Action): State => {
//   switch (action.type) {
//     case "ADD_INPUT":
//       return [
//         ...state,
//         {
//           id: uuidv4(),
//           type: "text",
//           value: "",
//           editable: true,
//           groupName: action.groupName,
//         },
//       ];
//     case "UPDATE_INPUT":
//       return state.map((input) =>
//         input.id === action.id ? { ...input, value: action.value } : input,
//       );
//     case "TOGGLE_EDITABILITY":
//       return state.map((input) =>
//         input.id === action.id
//           ? { ...input, editable: !input.editable }
//           : input,
//       );
//     case "SUBMIT":
//       return state
//         .map((input) => ({ ...input, editable: false }))
//         .filter((input) => input.value.trim() !== "");
//     default:
//       return state;
//   }
// };
//
// const Input = ({
//   input,
//   dispatch,
// }: {
//   input: InputField;
//   dispatch: React.Dispatch<Action>;
// }) => {
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     dispatch({
//       type: "UPDATE_INPUT",
//       id: input.id,
//       value: e.target.value,
//     });
//   };
//
//   if (!input.editable) {
//     return <span>{input.value}</span>;
//   }
//
//   return (
//     <input
//       {...stylex.props(styles.input)}
//       type="text"
//       value={input.value}
//       onChange={handleInputChange}
//     />
//   );
// };
//
// const DynamicInput = () => {
//   const [inputs, dispatch] = useReducer(inputReducer, []);
//   const [newGroupName, setNewGroupName] = useState<string>("");
//
//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();
//     dispatch({ type: "SUBMIT" });
//   };
//
//   const groupedInputs = inputs.reduce(
//     (acc, input) => {
//       acc[input.groupName] = acc[input.groupName] || [];
//       acc[input.groupName].push(input);
//       return acc;
//     },
//     {} as Record<string, InputField[]>,
//   );
//
//   return (
//     <div>
//       <input
//         {...stylex.props(styles.input)}
//         type="text"
//         value={newGroupName}
//         onChange={(e) => setNewGroupName(e.target.value)}
//         placeholder="ⓣ🅈ⓟⒺ"
//       />
//       <button
//         {...stylex.props(styles.button)}
//         onClick={() => dispatch({ type: "ADD_INPUT", groupName: newGroupName })}
//       >
//         ➕
//       </button>
//       <form onSubmit={handleSubmit} {...stylex.props(styles.form)}>
//         {Object.entries(groupedInputs).map(([groupName, inputs]) => (
//           <div key={groupName}>
//             <h3>{groupName}</h3>
//             {inputs.map((input) => (
//               <div key={input.id}>
//                 <Input input={input} dispatch={dispatch} />
//                 {!input.editable && (
//                   <button
//                     {...stylex.props(styles.button)}
//                     type="button"
//                     onClick={() =>
//                       dispatch({ type: "TOGGLE_EDITABILITY", id: input.id })
//                     }
//                   >
//                     edit
//                   </button>
//                 )}
//               </div>
//             ))}
//           </div>
//         ))}
//         <button type="submit" {...stylex.props(styles.button)}>
//           ✔️
//         </button>
//       </form>
//     </div>
//   );
// };
// const styles = stylex.create({
//   form: {
//     maxWidth: 380,
//     marginStart: "auto",
//     marginEnd: "auto",
//     marginBottom: 34,
//   },
//   input: {
//     backgroundColor: "#4b51b7",
//     borderStyle: "none",
//     boxSizing: "border-box",
//     color: "var(--primary-text)",
//     fontSize: 16,
//     fontWeight: "normal",
//     lineHeight: 1.25,
//     paddingBottom: 10,
//     paddingEnd: 16,
//     paddingTop: 26,
//     width: "100%",
//     alignSelf: "center",
//   },
//   button: {
//     color: "#4b51b7",
//     alignItems: "center",
//     borderColor: "#4a86c7",
//     borderRadius: 8,
//   },
//   base: {
//     width: {
//       default: 800,
//       "@media (max-width: 800px)": "100%",
//       "@media (min-width: 1540px)": 1366,
//     },
//   },
//   img: {
//     width: 29,
//     height: "auto",
//   },
// });
// export default DynamicInput;
//
// User;
// import React, { useReducer, useState } from "react";
// import * as stylex from "@stylexjs/stylex";
// import { v4 as uuidv4 } from "uuid";
//
// interface InputField {
//   id: string;
//   type: "text";
//   value: string;
//   editable: boolean;
//   groupName: string;
// }
//
// type State = InputField[];
// type Action =
//   | { type: "ADD_INPUT"; groupName: string }
//   | { type: "UPDATE_INPUT"; id: string; value: string }
//   | { type: "TOGGLE_EDITABILITY"; id: string }
//   | { type: "SUBMIT" };
//
// const inputReducer = (state: State, action: Action): State => {
//   switch (action.type) {
//     case "ADD_INPUT":
//       return [
//         ...state,
//         {
//           id: uuidv4(),
//           type: "text",
//           value: "",
//           editable: true,
//           groupName: action.groupName,
//         },
//       ];
//     case "UPDATE_INPUT":
//       return state.map((input) =>
//         input.id === action.id ? { ...input, value: action.value } : input,
//       );
//     case "TOGGLE_EDITABILITY":
//       return state.map((input) =>
//         input.id === action.id
//           ? { ...input, editable: !input.editable }
//           : input,
//       );
//     case "SUBMIT":
//       return state
//         .map((input) => ({ ...input, editable: false }))
//         .filter((input) => input.value.trim() !== "");
//     default:
//       return state;
//   }
// };
//
// const Input = ({
//   input,
//   dispatch,
// }: {
//   input: InputField;
//   dispatch: React.Dispatch<Action>;
// }) => {
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     dispatch({
//       type: "UPDATE_INPUT",
//       id: input.id,
//       value: e.target.value,
//     });
//   };
//
//   if (!input.editable) {
//     return <span>{input.value}</span>;
//   }
//
//   return (
//     <input
//       {...stylex.props(styles.input)}
//       type="text"
//       value={input.value}
//       onChange={handleInputChange}
//     />
//   );
// };
//
// const DynamicInput = () => {
//   const [inputs, dispatch] = useReducer(inputReducer, []);
//   const [newGroupName, setNewGroupName] = useState<string>("");
//
//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();
//     dispatch({ type: "SUBMIT" });
//   };
//
//   const groupedInputs = inputs.reduce(
//     (acc, input) => {
//       acc[input.groupName] = acc[input.groupName] || [];
//       acc[input.groupName].push(input);
//       return acc;
//     },
//     {} as Record<string, InputField[]>,
//   );
//
//   return (
//     <div>
//       <input
//         {...stylex.props(styles.input)}
//         type="text"
//         value={newGroupName}
//         onChange={(e) => setNewGroupName(e.target.value)}
//         placeholder="ⓣ🅈ⓟⒺ"
//       />
//       <button
//         {...stylex.props(styles.button)}
//         onClick={() => dispatch({ type: "ADD_INPUT", groupName: newGroupName })}
//       >
//         ➕
//       </button>
//       <form onSubmit={handleSubmit} {...stylex.props(styles.form)}>
//         {Object.entries(groupedInputs).map(([groupName, inputs]) => (
//           <div key={groupName}>
//             <h3>{groupName}</h3>
//             {inputs.map((input) => (
//               <div key={input.id}>
//                 <Input input={input} dispatch={dispatch} />
//                 {!input.editable && (
//                   <button
//                     {...stylex.props(styles.button)}
//                     type="button"
//                     onClick={() =>
//                       dispatch({ type: "TOGGLE_EDITABILITY", id: input.id })
//                     }
//                   >
//                     edit
//                   </button>
//                 )}
//               </div>
//             ))}
//           </div>
//         ))}
//         <button type="submit" {...stylex.props(styles.button)}>
//           ✔️
//         </button>
//       </form>
//     </div>
//   );
// };
// const styles = stylex.create({
//   form: {
//     maxWidth: 380,
//     marginStart: "auto",
//     marginEnd: "auto",
//     marginBottom: 34,
//   },
//   input: {
//     backgroundColor: "#4b51b7",
//     borderStyle: "none",
//     boxSizing: "border-box",
//     color: "var(--primary-text)",
//     fontSize: 16,
//     fontWeight: "normal",
//     lineHeight: 1.25,
//     paddingBottom: 10,
//     paddingEnd: 16,
//     paddingTop: 26,
//     width: "100%",
//     alignSelf: "center",
//   },
//   button: {
//     color: "#4b51b7",
//     alignItems: "center",
//     borderColor: "#4a86c7",
//     borderRadius: 8,
//   },
//   base: {
//     width: {
//       default: 800,
//       "@media (max-width: 800px)": "100%",
//       "@media (min-width: 1540px)": 1366,
//     },
//   },
//   img: {
//     width: 29,
//     height: "auto",
//   },
// });
// export default DynamicInput;
