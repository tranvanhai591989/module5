package connect.frontend.repository;

import connect.frontend.model.MedicalFile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface MedicalFileRepository extends JpaRepository<MedicalFile, Integer> {
    @Query(value = "select * from medical_file limit :page, 5", nativeQuery = true)
    List<MedicalFile> findAllPagination(@Param("page") Integer page);

    @Query(value = "select * from medical_file", nativeQuery = true)
    List<MedicalFile> findAllNoPagination();

    @Query(value = "select medical_file.* from medical_file join patient on medical_file.patient_id = patient.id where medical_file.doctor like %:doctor% and patient.name like %:name% and medical_file.reason like %:reason% and patient.treatments like %:treatments% limit :page, 5", nativeQuery = true)
    List<MedicalFile> search(@Param("doctor") String doctor, @Param("name") String name, @Param("reason") String reason, @Param("treatments") String method, @Param("page") Integer page);

    @Query(value = "select * from medical_file where id = :id", nativeQuery = true)
    Optional<MedicalFile> findById(@Param("id") Integer id);

    @Modifying
    @Transactional
    @Query(value = "insert into medical_file(patient_id, start_day, end_day, reason, treatments, doctor) values (:patientId, :statDay, :endDay, :reason, :treatments, :doctor );", nativeQuery = true)
    void save(@Param("patientId") Integer patienterId, @Param("startDay") LocalDate dayIn, @Param("endDay") LocalDate dayOut, @Param("reason") String reason, @Param("treatments") String method, @Param("doctor") String doctor);

    @Transactional
    @Modifying
    @Query(value = "update medical_file set start_day = :startDay, end_day = :endDay, reason = :reason, treatments = :treatments, doctor = :doctor where id = :id", nativeQuery = true)
    void update(@Param("startDay") LocalDate dayIn, @Param("endDay") LocalDate dayOut, @Param("reason") String reason, @Param("treatments") String method, @Param("doctor") String doctor, @Param("id") Integer id);

    @Modifying
    @Transactional
    @Query(value = "delete from medical_file where id = :id", nativeQuery = true)
    void delete(@Param("id") Integer id);
}
