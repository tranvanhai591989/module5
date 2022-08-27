package connect.frontend.dto;

import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import javax.validation.constraints.NotBlank;
import java.time.LocalDate;
import java.time.Period;
import java.time.format.DateTimeFormatter;

public class MedicalFileDto implements Validator {
    private Integer id;

    @NotBlank(message = "*Không được để trống!")
    private String patient;

    @NotBlank(message = "*Không được để trống!")
    private String startDay;

    @NotBlank(message = "*Không được để trống!")
    private String endDay;

    @NotBlank(message = "*Không được để trống!")
    private String reason;

    @NotBlank(message = "*Không được để trống!")
    private String treatments;

    @NotBlank(message = "*Không được để trống!")
    private String doctor;

    public MedicalFileDto() {
    }

    public MedicalFileDto(Integer id, String patient, String startDay, String endDay, String reason, String treatments, String doctor) {
        this.id = id;
        this.patient = patient;
        this.startDay = startDay;
        this.endDay = endDay;
        this.reason = reason;
        this.treatments = treatments;
        this.doctor = doctor;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPatient() {
        return patient;
    }

    public void setPatient(String patient) {
        this.patient = patient;
    }

    public String getStartDay() {
        return startDay;
    }

    public void setStartDay(String startDay) {
        this.startDay = startDay;
    }

    public String getEndDay() {
        return endDay;
    }

    public void setEndDay(String endDay) {
        this.endDay = endDay;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getTreatments() {
        return treatments;
    }

    public void setTreatments(String treatments) {
        this.treatments = treatments;
    }

    public String getDoctor() {
        return doctor;
    }

    public void setDoctor(String doctor) {
        this.doctor = doctor;
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {
        MedicalFileDto medicalFileDto = (MedicalFileDto) target;
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

        if (Period.between(LocalDate.parse(medicalFileDto.getStartDay(), formatter), LocalDate.now()).getDays() < 0) {
            errors.rejectValue("dayIn", "dayIn.fail");
        }

        if (Period.between(LocalDate.parse(medicalFileDto.getEndDay(), formatter), LocalDate.now()).getDays() < 0) {
            errors.rejectValue("dayOut", "dayOut.fail");
        }

        if (Period.between(LocalDate.parse(medicalFileDto.getStartDay(), formatter), LocalDate.parse(medicalFileDto.getEndDay(), formatter)).getDays() < 0) {
            errors.rejectValue("dayOut", "minusDay.fail");
        }
    }
}
