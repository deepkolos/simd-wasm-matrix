(module
 (type $i32_=>_none (func (param i32)))
 (type $none_=>_none (func))
 (type $i32_i32_i32_=>_none (func (param i32 i32 i32)))
 (type $i32_f32_=>_none (func (param i32 f32)))
 (type $i32_=>_f32 (func (param i32) (result f32)))
 (global $global$0 i32 (i32.const 1024))
 (global $global$1 i32 (i32.const 1024))
 (global $global$2 i32 (i32.const 1024))
 (global $global$3 i32 (i32.const 66560))
 (global $global$4 i32 (i32.const 0))
 (global $global$5 i32 (i32.const 1))
 (memory $0 2)
 (export "memory" (memory $0))
 (export "__wasm_call_ctors" (func $0))
 (export "matrix4_multiply" (func $1))
 (export "matrix4_determinant" (func $2))
 (export "matrix4_invert" (func $3))
 (export "matrix4_transpose" (func $4))
 (export "matrix4_invert_transform" (func $5))
 (export "matrix4_multiply_scalar" (func $6))
 (export "__dso_handle" (global $global$0))
 (export "__data_end" (global $global$1))
 (export "__global_base" (global $global$2))
 (export "__heap_base" (global $global$3))
 (export "__memory_base" (global $global$4))
 (export "__table_base" (global $global$5))
 (func $0
  (nop)
 )
 (func $1 (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 v128)
  (local $4 v128)
  (local $5 v128)
  (local $6 v128)
  (v128.store offset=48 align=1
   (local.get $2)
   (f32x4.add
    (f32x4.add
     (f32x4.add
      (f32x4.mul
       (local.tee $3
        (v128.load align=1
         (local.get $0)
        )
       )
       (v128.load32_splat offset=48
        (local.get $1)
       )
      )
      (f32x4.mul
       (local.tee $4
        (v128.load offset=16 align=1
         (local.get $0)
        )
       )
       (v128.load32_splat offset=52
        (local.get $1)
       )
      )
     )
     (f32x4.mul
      (local.tee $5
       (v128.load offset=32 align=1
        (local.get $0)
       )
      )
      (v128.load32_splat offset=56
       (local.get $1)
      )
     )
    )
    (f32x4.mul
     (local.tee $6
      (v128.load offset=48 align=1
       (local.get $0)
      )
     )
     (v128.load32_splat offset=60
      (local.get $1)
     )
    )
   )
  )
  (v128.store offset=32 align=1
   (local.get $2)
   (f32x4.add
    (f32x4.add
     (f32x4.add
      (f32x4.mul
       (local.get $3)
       (v128.load32_splat offset=32
        (local.get $1)
       )
      )
      (f32x4.mul
       (local.get $4)
       (v128.load32_splat offset=36
        (local.get $1)
       )
      )
     )
     (f32x4.mul
      (local.get $5)
      (v128.load32_splat offset=40
       (local.get $1)
      )
     )
    )
    (f32x4.mul
     (local.get $6)
     (v128.load32_splat offset=44
      (local.get $1)
     )
    )
   )
  )
  (v128.store offset=16 align=1
   (local.get $2)
   (f32x4.add
    (f32x4.add
     (f32x4.add
      (f32x4.mul
       (local.get $3)
       (v128.load32_splat offset=16
        (local.get $1)
       )
      )
      (f32x4.mul
       (local.get $4)
       (v128.load32_splat offset=20
        (local.get $1)
       )
      )
     )
     (f32x4.mul
      (local.get $5)
      (v128.load32_splat offset=24
       (local.get $1)
      )
     )
    )
    (f32x4.mul
     (local.get $6)
     (v128.load32_splat offset=28
      (local.get $1)
     )
    )
   )
  )
  (v128.store align=1
   (local.get $2)
   (f32x4.add
    (f32x4.add
     (f32x4.add
      (f32x4.mul
       (local.get $3)
       (v128.load32_splat
        (local.get $1)
       )
      )
      (f32x4.mul
       (local.get $4)
       (v128.load32_splat offset=4
        (local.get $1)
       )
      )
     )
     (f32x4.mul
      (local.get $5)
      (v128.load32_splat offset=8
       (local.get $1)
      )
     )
    )
    (f32x4.mul
     (local.get $6)
     (v128.load32_splat offset=12
      (local.get $1)
     )
    )
   )
  )
 )
 (func $2 (param $0 i32) (result f32)
  (local $1 v128)
  (local $2 v128)
  (local $3 v128)
  (local $4 v128)
  (local $5 f32)
  (local $6 f32)
  (local $7 f32)
  (f32x4.extract_lane 0
   (f32x4.add
    (local.tee $1
     (f32x4.add
      (local.tee $1
       (f32x4.mul
        (v128.load align=1
         (local.get $0)
        )
        (f32x4.mul
         (f32x4.add
          (f32x4.mul
           (f32x4.sub
            (f32x4.mul
             (local.tee $1
              (f32x4.replace_lane 1
               (v128.load32_splat offset=20
                (local.get $0)
               )
               (local.tee $5
                (f32.load offset=24
                 (local.get $0)
                )
               )
              )
             )
             (local.tee $2
              (f32x4.replace_lane 0
               (v128.load32_splat offset=32
                (local.get $0)
               )
               (local.tee $6
                (f32.load offset=40
                 (local.get $0)
                )
               )
              )
             )
            )
            (f32x4.mul
             (local.tee $4
              (f32x4.replace_lane 0
               (v128.load32_splat offset=16
                (local.get $0)
               )
               (local.get $5)
              )
             )
             (local.tee $3
              (f32x4.replace_lane 1
               (v128.load32_splat offset=36
                (local.get $0)
               )
               (local.get $6)
              )
             )
            )
           )
           (f32x4.replace_lane 3
            (v128.load32_splat offset=60
             (local.get $0)
            )
            (local.tee $7
             (f32.load offset=56
              (local.get $0)
             )
            )
           )
          )
          (f32x4.sub
           (f32x4.mul
            (f32x4.replace_lane 3
             (v128.load32_splat offset=28
              (local.get $0)
             )
             (local.get $5)
            )
            (f32x4.sub
             (f32x4.mul
              (local.get $3)
              (local.tee $3
               (f32x4.replace_lane 0
                (v128.load32_splat offset=48
                 (local.get $0)
                )
                (local.get $7)
               )
              )
             )
             (f32x4.mul
              (local.get $2)
              (local.tee $2
               (f32x4.replace_lane 1
                (v128.load32_splat offset=52
                 (local.get $0)
                )
                (local.get $7)
               )
              )
             )
            )
           )
           (f32x4.mul
            (f32x4.replace_lane 3
             (v128.load32_splat offset=44
              (local.get $0)
             )
             (local.get $6)
            )
            (f32x4.sub
             (f32x4.mul
              (local.get $1)
              (local.get $3)
             )
             (f32x4.mul
              (local.get $4)
              (local.get $2)
             )
            )
           )
          )
         )
         (v128.const i32x4 0x3f800000 0x3f800000 0xbf800000 0x3f800000)
        )
       )
      )
      (i8x16.shuffle 12 13 14 15 8 9 10 11 4 5 6 7 0 1 2 3
       (local.get $1)
       (local.get $1)
      )
     )
    )
    (i8x16.shuffle 4 5 6 7 0 1 2 3 12 13 14 15 8 9 10 11
     (local.get $1)
     (local.get $1)
    )
   )
  )
 )
 (func $3 (param $0 i32)
  (local $1 f32)
  (local $2 f32)
  (local $3 f32)
  (local $4 f32)
  (local $5 f32)
  (local $6 f32)
  (local $7 f32)
  (local $8 f32)
  (local $9 f32)
  (local $10 f32)
  (local $11 f32)
  (local $12 f32)
  (local $13 f32)
  (local $14 f32)
  (local $15 f32)
  (local $16 f32)
  (local $17 f32)
  (local $18 f32)
  (local $19 f32)
  (local $20 f32)
  (local $21 f32)
  (local $22 f32)
  (local $23 f32)
  (local $24 f32)
  (local $25 f32)
  (local $26 f32)
  (local $27 f32)
  (local $28 f32)
  (local $29 f32)
  (local $30 v128)
  (local $31 v128)
  (local $32 v128)
  (local $33 v128)
  (if
   (f32.ne
    (local.tee $1
     (f32x4.extract_lane 0
      (f32x4.sub
       (f32x4.add
        (local.tee $31
         (f32x4.add
          (local.tee $31
           (f32x4.mul
            (i8x16.shuffle 0 1 2 3 8 9 10 11 12 13 14 15 20 21 22 23
             (local.tee $32
              (f32x4.sub
               (f32x4.mul
                (f32x4.replace_lane 3
                 (v128.load32_splat
                  (local.get $0)
                 )
                 (local.tee $8
                  (f32.load offset=4
                   (local.get $0)
                  )
                 )
                )
                (f32x4.replace_lane 3
                 (f32x4.replace_lane 2
                  (local.tee $30
                   (f32x4.replace_lane 1
                    (v128.load32_splat offset=20
                     (local.get $0)
                    )
                    (local.tee $6
                     (f32.load offset=24
                      (local.get $0)
                     )
                    )
                   )
                  )
                  (local.tee $9
                   (f32.load offset=28
                    (local.get $0)
                   )
                  )
                 )
                 (local.get $6)
                )
               )
               (f32x4.mul
                (f32x4.replace_lane 3
                 (f32x4.replace_lane 2
                  (local.tee $31
                   (f32x4.replace_lane 1
                    (v128.load32_splat offset=4
                     (local.get $0)
                    )
                    (local.tee $7
                     (f32.load offset=8
                      (local.get $0)
                     )
                    )
                   )
                  )
                  (local.tee $10
                   (f32.load offset=12
                    (local.get $0)
                   )
                  )
                 )
                 (local.get $7)
                )
                (f32x4.replace_lane 3
                 (v128.load32_splat offset=16
                  (local.get $0)
                 )
                 (local.tee $11
                  (f32.load offset=20
                   (local.get $0)
                  )
                 )
                )
               )
              )
             )
             (local.tee $30
              (f32x4.sub
               (f32x4.mul
                (f32x4.replace_lane 3
                 (f32x4.replace_lane 2
                  (local.get $31)
                  (local.tee $2
                   (f32.load offset=32
                    (local.get $0)
                   )
                  )
                 )
                 (local.get $2)
                )
                (f32x4.replace_lane 3
                 (f32x4.replace_lane 2
                  (v128.load32_splat offset=28
                   (local.get $0)
                  )
                  (local.tee $3
                   (f32.load offset=56
                    (local.get $0)
                   )
                  )
                 )
                 (local.tee $12
                  (f32.load offset=52
                   (local.get $0)
                  )
                 )
                )
               )
               (f32x4.mul
                (f32x4.replace_lane 3
                 (f32x4.replace_lane 2
                  (v128.load32_splat offset=12
                   (local.get $0)
                  )
                  (local.tee $4
                   (f32.load offset=40
                    (local.get $0)
                   )
                  )
                 )
                 (local.tee $13
                  (f32.load offset=36
                   (local.get $0)
                  )
                 )
                )
                (f32x4.replace_lane 3
                 (f32x4.replace_lane 2
                  (local.get $30)
                  (local.tee $5
                   (f32.load offset=48
                    (local.get $0)
                   )
                  )
                 )
                 (local.get $5)
                )
               )
              )
             )
            )
            (i8x16.shuffle 0 1 2 3 8 9 10 11 12 13 14 15 28 29 30 31
             (local.tee $33
              (f32x4.sub
               (f32x4.mul
                (f32x4.replace_lane 3
                 (f32x4.replace_lane 0
                  (v128.load32_splat offset=36
                   (local.get $0)
                  )
                  (local.get $4)
                 )
                 (local.get $2)
                )
                (f32x4.replace_lane 2
                 (v128.load32_splat offset=60
                  (local.get $0)
                 )
                 (local.get $3)
                )
               )
               (f32x4.mul
                (f32x4.replace_lane 2
                 (v128.load32_splat offset=44
                  (local.get $0)
                 )
                 (local.get $4)
                )
                (f32x4.replace_lane 3
                 (f32x4.replace_lane 0
                  (v128.load32_splat offset=52
                   (local.get $0)
                  )
                  (local.get $3)
                 )
                 (local.get $5)
                )
               )
              )
             )
             (local.get $30)
            )
           )
          )
          (i8x16.shuffle 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23
           (local.get $31)
           (local.get $31)
          )
         )
        )
        (i8x16.shuffle 4 5 6 7 0 1 2 3 20 21 22 23 16 17 18 19
         (local.get $31)
         (local.get $31)
        )
       )
       (f32x4.add
        (local.tee $30
         (f32x4.mul
          (i8x16.shuffle 4 5 6 7 16 17 18 19 4 5 6 7 16 17 18 19
           (local.get $32)
           (local.get $30)
          )
          (i8x16.shuffle 4 5 6 7 8 9 10 11 4 5 6 7 8 9 10 11
           (local.get $33)
           (local.get $30)
          )
         )
        )
        (i8x16.shuffle 4 5 6 7 0 1 2 3 20 21 22 23 16 17 18 19
         (local.get $30)
         (local.get $30)
        )
       )
      )
     )
    )
    (f32.const 0)
   )
   (block
    (local.set $14
     (f32.load
      (local.get $0)
     )
    )
    (f32.store offset=32
     (local.get $0)
     (f32.mul
      (f32.add
       (f32.mul
        (local.get $9)
        (local.tee $18
         (f32.sub
          (f32.mul
           (local.get $2)
           (local.get $12)
          )
          (f32.mul
           (local.get $13)
           (local.get $5)
          )
         )
        )
       )
       (f32.sub
        (f32.mul
         (local.tee $15
          (f32.load offset=16
           (local.get $0)
          )
         )
         (local.tee $19
          (f32.sub
           (f32.mul
            (local.get $13)
            (local.tee $16
             (f32.load offset=60
              (local.get $0)
             )
            )
           )
           (f32.mul
            (local.tee $17
             (f32.load offset=44
              (local.get $0)
             )
            )
            (local.get $12)
           )
          )
         )
        )
        (f32.mul
         (local.get $11)
         (local.tee $20
          (f32.sub
           (f32.mul
            (local.get $2)
            (local.get $16)
           )
           (f32.mul
            (local.get $17)
            (local.get $5)
           )
          )
         )
        )
       )
      )
      (local.tee $1
       (f32.div
        (f32.const 1)
        (local.get $1)
       )
      )
     )
    )
    (f32.store
     (local.get $0)
     (f32.mul
      (f32.add
       (f32.mul
        (local.get $9)
        (local.tee $21
         (f32.sub
          (f32.mul
           (local.get $13)
           (local.get $3)
          )
          (f32.mul
           (local.get $4)
           (local.get $12)
          )
         )
        )
       )
       (f32.sub
        (f32.mul
         (local.get $11)
         (local.tee $22
          (f32.sub
           (f32.mul
            (local.get $4)
            (local.get $16)
           )
           (f32.mul
            (local.get $17)
            (local.get $3)
           )
          )
         )
        )
        (f32.mul
         (local.get $6)
         (local.get $19)
        )
       )
      )
      (local.get $1)
     )
    )
    (f32.store offset=52
     (local.get $0)
     (f32.mul
      (f32.add
       (f32.mul
        (local.get $7)
        (local.get $18)
       )
       (f32.sub
        (f32.mul
         (local.get $14)
         (local.get $21)
        )
        (f32.mul
         (local.get $8)
         (local.tee $23
          (f32.sub
           (f32.mul
            (local.get $2)
            (local.get $3)
           )
           (f32.mul
            (local.get $4)
            (local.get $5)
           )
          )
         )
        )
       )
      )
      (local.get $1)
     )
    )
    (f32.store offset=20
     (local.get $0)
     (f32.mul
      (f32.add
       (f32.mul
        (local.get $10)
        (local.get $23)
       )
       (f32.sub
        (f32.mul
         (local.get $14)
         (local.get $22)
        )
        (f32.mul
         (local.get $7)
         (local.get $20)
        )
       )
      )
      (local.get $1)
     )
    )
    (f32.store offset=40
     (local.get $0)
     (f32.mul
      (f32.add
       (f32.sub
        (f32.mul
         (local.tee $24
          (f32.sub
           (f32.mul
            (local.get $8)
            (local.get $9)
           )
           (f32.mul
            (local.get $10)
            (local.get $11)
           )
          )
         )
         (local.get $5)
        )
        (f32.mul
         (local.tee $25
          (f32.sub
           (f32.mul
            (local.get $14)
            (local.get $9)
           )
           (f32.mul
            (local.get $10)
            (local.get $15)
           )
          )
         )
         (local.get $12)
        )
       )
       (f32.mul
        (local.get $16)
        (local.tee $26
         (f32.sub
          (f32.mul
           (local.get $14)
           (local.get $11)
          )
          (f32.mul
           (local.get $8)
           (local.get $15)
          )
         )
        )
       )
      )
      (local.get $1)
     )
    )
    (f32.store offset=8
     (local.get $0)
     (f32.mul
      (f32.add
       (f32.sub
        (f32.mul
         (local.tee $27
          (f32.sub
           (f32.mul
            (local.get $7)
            (local.get $9)
           )
           (f32.mul
            (local.get $10)
            (local.get $6)
           )
          )
         )
         (local.get $12)
        )
        (f32.mul
         (local.get $24)
         (local.get $3)
        )
       )
       (f32.mul
        (local.get $16)
        (local.tee $28
         (f32.sub
          (f32.mul
           (local.get $8)
           (local.get $6)
          )
          (f32.mul
           (local.get $7)
           (local.get $11)
          )
         )
        )
       )
      )
      (local.get $1)
     )
    )
    (f32.store offset=60
     (local.get $0)
     (f32.mul
      (f32.add
       (f32.sub
        (f32.mul
         (local.get $2)
         (local.get $28)
        )
        (f32.mul
         (local.tee $29
          (f32.sub
           (f32.mul
            (local.get $14)
            (local.get $6)
           )
           (f32.mul
            (local.get $7)
            (local.get $15)
           )
          )
         )
         (local.get $13)
        )
       )
       (f32.mul
        (local.get $26)
        (local.get $4)
       )
      )
      (local.get $1)
     )
    )
    (f32.store offset=28
     (local.get $0)
     (f32.mul
      (f32.add
       (f32.sub
        (f32.mul
         (local.get $2)
         (local.get $27)
        )
        (f32.mul
         (local.get $25)
         (local.get $4)
        )
       )
       (f32.mul
        (local.get $29)
        (local.get $17)
       )
      )
      (local.get $1)
     )
    )
    (f32.store offset=36
     (local.get $0)
     (f32.mul
      (f32.sub
       (f32.sub
        (f32.mul
         (local.get $8)
         (local.get $20)
        )
        (f32.mul
         (local.get $14)
         (local.get $19)
        )
       )
       (f32.mul
        (local.get $10)
        (local.get $18)
       )
      )
      (local.get $1)
     )
    )
    (f32.store offset=4
     (local.get $0)
     (f32.mul
      (f32.sub
       (f32.sub
        (f32.mul
         (local.get $7)
         (local.get $19)
        )
        (f32.mul
         (local.get $8)
         (local.get $22)
        )
       )
       (f32.mul
        (local.get $10)
        (local.get $21)
       )
      )
      (local.get $1)
     )
    )
    (f32.store offset=48
     (local.get $0)
     (f32.mul
      (f32.sub
       (f32.sub
        (f32.mul
         (local.get $11)
         (local.get $23)
        )
        (f32.mul
         (local.get $15)
         (local.get $21)
        )
       )
       (f32.mul
        (local.get $6)
        (local.get $18)
       )
      )
      (local.get $1)
     )
    )
    (f32.store offset=16
     (local.get $0)
     (f32.mul
      (f32.sub
       (f32.sub
        (f32.mul
         (local.get $6)
         (local.get $20)
        )
        (f32.mul
         (local.get $15)
         (local.get $22)
        )
       )
       (f32.mul
        (local.get $9)
        (local.get $23)
       )
      )
      (local.get $1)
     )
    )
    (f32.store offset=56
     (local.get $0)
     (f32.mul
      (f32.sub
       (f32.sub
        (f32.mul
         (local.get $29)
         (local.get $12)
        )
        (f32.mul
         (local.get $28)
         (local.get $5)
        )
       )
       (f32.mul
        (local.get $26)
        (local.get $3)
       )
      )
      (local.get $1)
     )
    )
    (f32.store offset=24
     (local.get $0)
     (f32.mul
      (f32.sub
       (f32.sub
        (f32.mul
         (local.get $25)
         (local.get $3)
        )
        (f32.mul
         (local.get $27)
         (local.get $5)
        )
       )
       (f32.mul
        (local.get $29)
        (local.get $16)
       )
      )
      (local.get $1)
     )
    )
    (f32.store offset=44
     (local.get $0)
     (f32.mul
      (f32.sub
       (f32.sub
        (f32.mul
         (local.get $13)
         (local.get $25)
        )
        (f32.mul
         (local.get $2)
         (local.get $24)
        )
       )
       (f32.mul
        (local.get $26)
        (local.get $17)
       )
      )
      (local.get $1)
     )
    )
    (f32.store offset=12
     (local.get $0)
     (f32.mul
      (f32.sub
       (f32.sub
        (f32.mul
         (local.get $24)
         (local.get $4)
        )
        (f32.mul
         (local.get $13)
         (local.get $27)
        )
       )
       (f32.mul
        (local.get $28)
        (local.get $17)
       )
      )
      (local.get $1)
     )
    )
   )
  )
 )
 (func $4 (param $0 i32)
  (local $1 v128)
  (local $2 v128)
  (local $3 v128)
  (local $4 v128)
  (local $5 v128)
  (local $6 v128)
  (v128.store offset=48
   (local.get $0)
   (i8x16.shuffle 8 9 10 11 12 13 14 15 24 25 26 27 28 29 30 31
    (local.tee $3
     (i8x16.shuffle 8 9 10 11 24 25 26 27 12 13 14 15 28 29 30 31
      (local.tee $1
       (v128.load
        (local.get $0)
       )
      )
      (local.tee $2
       (v128.load offset=16
        (local.get $0)
       )
      )
     )
    )
    (local.tee $6
     (i8x16.shuffle 8 9 10 11 24 25 26 27 12 13 14 15 28 29 30 31
      (local.tee $4
       (v128.load offset=32
        (local.get $0)
       )
      )
      (local.tee $5
       (v128.load offset=48
        (local.get $0)
       )
      )
     )
    )
   )
  )
  (v128.store offset=32
   (local.get $0)
   (i8x16.shuffle 0 1 2 3 4 5 6 7 16 17 18 19 20 21 22 23
    (local.get $3)
    (local.get $6)
   )
  )
  (v128.store offset=16
   (local.get $0)
   (i8x16.shuffle 8 9 10 11 12 13 14 15 24 25 26 27 28 29 30 31
    (local.tee $1
     (i8x16.shuffle 0 1 2 3 16 17 18 19 4 5 6 7 20 21 22 23
      (local.get $1)
      (local.get $2)
     )
    )
    (local.tee $2
     (i8x16.shuffle 0 1 2 3 16 17 18 19 4 5 6 7 20 21 22 23
      (local.get $4)
      (local.get $5)
     )
    )
   )
  )
  (v128.store
   (local.get $0)
   (i8x16.shuffle 0 1 2 3 4 5 6 7 16 17 18 19 20 21 22 23
    (local.get $1)
    (local.get $2)
   )
  )
 )
 (func $5 (param $0 i32)
  (local $1 v128)
  (local $2 v128)
  (local $3 v128)
  (local $4 v128)
  (local $5 v128)
  (v128.store offset=32
   (local.get $0)
   (local.tee $5
    (f32x4.mul
     (local.tee $2
      (f32x4.div
       (v128.const i32x4 0x3f800000 0x3f800000 0x3f800000 0x3f800000)
       (v128.bitselect
        (v128.const i32x4 0x3f800000 0x3f800000 0x3f800000 0x3f800000)
        (local.tee $2
         (f32x4.add
          (f32x4.add
           (f32x4.mul
            (local.tee $4
             (i8x16.shuffle 0 1 2 3 8 9 10 11 16 17 18 19 28 29 30 31
              (local.tee $3
               (i8x16.shuffle 0 1 2 3 4 5 6 7 16 17 18 19 20 21 22 23
                (local.tee $2
                 (v128.load
                  (local.get $0)
                 )
                )
                (local.tee $5
                 (v128.load offset=16
                  (local.get $0)
                 )
                )
               )
              )
              (local.tee $1
               (v128.load offset=32
                (local.get $0)
               )
              )
             )
            )
            (local.get $4)
           )
           (f32x4.mul
            (local.tee $3
             (i8x16.shuffle 4 5 6 7 12 13 14 15 20 21 22 23 28 29 30 31
              (local.get $3)
              (local.get $1)
             )
            )
            (local.get $3)
           )
          )
          (f32x4.mul
           (local.tee $1
            (i8x16.shuffle 0 1 2 3 8 9 10 11 24 25 26 27 28 29 30 31
             (i8x16.shuffle 8 9 10 11 12 13 14 15 24 25 26 27 28 29 30 31
              (local.get $2)
              (local.get $5)
             )
             (local.get $1)
            )
           )
           (local.get $1)
          )
         )
        )
        (f32x4.lt
         (local.get $2)
         (v128.const i32x4 0x322bcc77 0x322bcc77 0x322bcc77 0x322bcc77)
        )
       )
      )
     )
     (local.get $1)
    )
   )
  )
  (v128.store offset=16
   (local.get $0)
   (local.tee $3
    (f32x4.mul
     (local.get $2)
     (local.get $3)
    )
   )
  )
  (v128.store
   (local.get $0)
   (local.tee $4
    (f32x4.mul
     (local.get $2)
     (local.get $4)
    )
   )
  )
  (v128.store offset=48
   (local.get $0)
   (f32x4.sub
    (v128.const i32x4 0x00000000 0x00000000 0x00000000 0x3f800000)
    (f32x4.add
     (f32x4.mul
      (i8x16.shuffle 8 9 10 11 8 9 10 11 8 9 10 11 8 9 10 11
       (local.tee $1
        (v128.load offset=48
         (local.get $0)
        )
       )
       (local.get $1)
      )
      (local.get $5)
     )
     (f32x4.add
      (f32x4.mul
       (i8x16.shuffle 0 1 2 3 0 1 2 3 0 1 2 3 0 1 2 3
        (local.get $1)
        (local.get $1)
       )
       (local.get $4)
      )
      (f32x4.mul
       (i8x16.shuffle 4 5 6 7 4 5 6 7 4 5 6 7 4 5 6 7
        (local.get $1)
        (local.get $1)
       )
       (local.get $3)
      )
     )
    )
   )
  )
 )
 (func $6 (param $0 i32) (param $1 f32)
  (local $2 v128)
  (v128.store
   (local.get $0)
   (f32x4.mul
    (local.tee $2
     (f32x4.splat
      (local.get $1)
     )
    )
    (v128.load
     (local.get $0)
    )
   )
  )
  (v128.store offset=16
   (local.get $0)
   (f32x4.mul
    (local.get $2)
    (v128.load offset=16
     (local.get $0)
    )
   )
  )
  (v128.store offset=32
   (local.get $0)
   (f32x4.mul
    (local.get $2)
    (v128.load offset=32
     (local.get $0)
    )
   )
  )
  (v128.store offset=48
   (local.get $0)
   (f32x4.mul
    (local.get $2)
    (v128.load offset=48
     (local.get $0)
    )
   )
  )
 )
 ;; custom section "producers", size 37
 ;; features section: simd
)
