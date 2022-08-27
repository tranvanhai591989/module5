package connect.frontend.repository;

import connect.frontend.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Integer> {
    @Query(value = "select * from patient", nativeQuery = true)
    List<Patient> findAll();

    @Query(value = "select * from patient where id = :id", nativeQuery = true)
    Optional<Patient> findById(@Param("id") Integer id);

    @Transactional
    @Modifying
    @Query(value = "insert into patient(name) values (:name);", nativeQuery = true)
    void save(@Param("name") String name);

    @Transactional
    @Modifying
    @Query(value = "update patient set name = :name where id = :id", nativeQuery = true)
    void update(@Param("name") String name, @Param("id") Integer id);
}
