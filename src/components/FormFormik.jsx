import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";

const initialValues = {
  identificador_base: "",
  registros: [
    {
      factura: "",
      fecha: "",
      codigo: "",
      procedimiento: "",
      cantidad: "",
      vr_unitario: "",
      vr_total: "",
    },
  ],
};

export const FormFormik = () => (
  <div>
    <h1>Registrar</h1>
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values }) => (
        <Form>
          <Field name="identificador_base" type="text" placeholder="1234" />
          <FieldArray name="registros">
            {({ insert, remove, push }) => (
              <div>
                {values.registros.length > 0 &&
                  values.registros.map((registro, index) => (
                    <div className="row" key={index}>
                      <div className="col">
                        <label htmlFor={`registros.${index}.factura`}>
                          Factura
                        </label>
                        <Field
                          name={`registros.${index}.factura`}
                          placeholder="12345"
                          type="text"
                        />
                        <ErrorMessage
                          name={`registros.${index}.factura`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <div className="col">
                        <label htmlFor={`registros.${index}.fecha`}>
                          Fecha
                        </label>
                        <Field
                          name={`registros.${index}.fecha`}
                          placeholder="2022-07-08"
                          type="text"
                        />
                        <ErrorMessage
                          name={`registros.${index}.fecha`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <div className="col">
                        <label htmlFor={`registros.${index}.codigo`}>
                          Código
                        </label>
                        <Field
                          name={`registros.${index}.codigo`}
                          placeholder="987654"
                          type="text"
                        />
                        <ErrorMessage
                          name={`registros.${index}.codigo`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <div className="col">
                        <label htmlFor={`registros.${index}.procedimiento`}>
                          Procedimiento
                        </label>
                        <Field
                          name={`registros.${index}.procedimiento`}
                          placeholder="CONSULTA GENERAL"
                          type="text"
                        />
                        <ErrorMessage
                          name={`registros.${index}.procedimiento`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <div className="col">
                        <label htmlFor={`registros.${index}.cantidad`}>
                          Cantidad
                        </label>
                        <Field
                          name={`registros.${index}.cantidad`}
                          placeholder="1"
                          type="text"
                        />
                        <ErrorMessage
                          name={`registros.${index}.cantidad`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <div className="col">
                        <label htmlFor={`registros.${index}.vr_unitario`}>
                          Valor Unitario
                        </label>
                        <Field
                          name={`registros.${index}.vr_unitario`}
                          placeholder="123456"
                          type="text"
                        />
                        <ErrorMessage
                          name={`registros.${index}.vr_unitario`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <div className="col">
                        <label htmlFor={`registros.${index}.vr_total`}>
                          Valor Total
                        </label>
                        <Field
                          name={`registros.${index}.vr_total`}
                          placeholder="987654"
                          type="text"
                        />
                        <ErrorMessage
                          name={`registros.${index}.vr_total`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <div className="col">
                        <button
                          type="button"
                          className="secondary"
                          onClick={() => remove(index)}
                        >
                          X
                        </button>
                      </div>
                    </div>
                  ))}
                <button
                  type="button"
                  className="secondary"
                  onClick={() =>
                    push({
                      factura: "",
                      fecha: "",
                      codigo: "",
                      procedimiento: "",
                      cantidad: "",
                      vr_unitario: "",
                      vr_total: "",
                    })
                  }
                >
                  Añadir factura
                </button>
              </div>
            )}
          </FieldArray>
          <button type="submit">Enviar</button>
        </Form>
      )}
    </Formik>
  </div>
);
