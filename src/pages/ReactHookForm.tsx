import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IFields {
  name: string;
  email: string;
  gender: string;
  policy: boolean;
  weather: string;
}

const schema = yup
  .object({
    name: yup.string().required("Обязательное поле"),
    email: yup.string().required("Обязательное поле"),
    gender: yup.string().required("Обязательное поле"),
    policy: yup.bool().oneOf([true], "Обязательное поле"),
    weather: yup.string().nullable().required("Обязательное поле"),
  })
  .required();

const ReactHookForm = () => {
  const form = useForm<IFields>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<IFields> = (data) => {
    console.log("SUBMIT", data);
  };

  console.log(form);

  const errors = form.formState.errors;
  const getFieldProps = form.register;

  return (
    <div>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <input {...getFieldProps("name")} className="text-input" />
        {errors.name && <p className="error-msg">{errors.name?.message}</p>}

        <input {...getFieldProps("email")} className="text-input" />
        {errors.email && <p className="error-msg">{errors.email?.message}</p>}

        <select {...getFieldProps("gender")}>
          <option value="">Выберите пол</option>
          <option value="female">Женский</option>
          <option value="male">Мужской</option>
          <option value="other">Другой</option>
        </select>
        {errors.gender && <p className="error-msg">{errors.gender?.message}</p>}

        {/* Checkbox */}

        <div style={{ display: "flex", marginTop: "20px" }}>
          <input type="checkbox" {...getFieldProps("policy")} />
          <span>Даю свое согласие на обработку </span>
        </div>
        {errors.policy && <p className="error-msg">{errors.policy?.message}</p>}

        {/* Radio group */}
        <hr />
        <div className="radio-group">
          <div className="radio-row">
            <input
              {...getFieldProps("weather")}
              type="radio"
              name="weather"
              value="sunny"
              id="field-sunny"
            />
            <label htmlFor="field-sunny">Солнечно</label>
          </div>
          <div className="radio-row">
            <input
              {...getFieldProps("weather")}
              type="radio"
              name="weather"
              value="rain"
              id="field-rain"
            />
            <label htmlFor="field-rain">Дождь</label>
          </div>

          {errors.weather && (
            <p className="error-msg">{errors.weather?.message}</p>
          )}
        </div>

        <input type="submit" className="submit-btn" />
      </form>
    </div>
  );
};

export default ReactHookForm;
